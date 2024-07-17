import { defineStore } from "pinia";
import { ref, reactive, toRaw, watch, computed } from "vue";
import axios from "axios";
import { addItem, addItems, deleteItem, getItems, hasItems } from "@/indexedDB";

export const usePostStore = defineStore("postStore", () => {
  const catApiKey =
    "live_42WMqpulkHdqY3krKopYktUseCHCREhVZZw2LfNnfkorDLEdarm0YzoYgdgU73y5";

  const images = ref([]);
  const favourites = ref([]);

  const isPostsLoading = ref(false);
  const postsPerPage = 10;
  const currentPage = ref(1);
  const pagesTotal = ref(0);

  const isDark = ref(false);

  const allImages = computed(() => {
    return images.value.map((image) => ({
      ...toRaw(image),
      isLiked: favourites.value.some((fav) => fav.id === image.id),
    }));
  });

  const favImages = computed(() => {
    return favourites.value.reverse();
  });

  const addFav = async (image) => {
    image.isLiked = true;
    favourites.value.push(image);
    // console.log(image);

    try {
      await addItem(image);
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const delFav = async (image) => {
    image.isLiked = false;
    favourites.value = favourites.value.filter((fav) => fav.id !== image.id);
    try {
      await deleteItem(image.id);
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  // const fetchFavourites = async () => {
  //   try {
  //     console.log("fetching favourites...");
  //     const response = await axios.get(
  //       "https://api.thecatapi.com/v1/favourites",
  //       {
  //         params: {
  //           limit: 50,
  //           order: "DESC",
  //         },
  //         headers: {
  //           "x-api-key": catApiKey,
  //         },
  //       },
  //     );
  //     favourites.value = response.data;
  //   } catch (error) {
  //     alert(error);
  //   } finally {
  //   }
  // };

  const fetchFromIDB = async () => {
    console.log("fetching from IDB...");
    try {
      // console.log("trying to fetch data from IDB");
      const response = await getItems();
      // console.log(response);
      favourites.value = response;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImages = async () => {
    console.log("fetching images...");
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: 9,
            // has_breeds: 1,
            order: "DESC",
          },
          headers: {
            "x-api-key": catApiKey,
          },
        },
      );
      images.value = response.data;

      // checking if fetched images have been already liked before
      // by comparing id's images in IDB and in fetched data
      // images.value = response.data.map((image) => ({
      //   ...image,
      //   isLiked: favourites.value.some((fav) => fav.id === image.id),
      // }));
      // await addItems(toRaw(images.value));
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  // const fetchMoreImages = async () => {
  //   try {
  //     console.log("trying to get more images");
  //     currentPage.value++;
  //     const response = await axios.get(
  //       "https://api.thecatapi.com/v1/images/search",
  //       {
  //         params: {
  //           limit: postsPerPage,
  //           // order: "DESC",
  //           page: currentPage.value,
  //         },
  //       },
  //     );
  //     images.value = [...images.value, ...response.data];
  //   } catch (error) {
  //     alert(error);
  //   } finally {
  //   }
  // };

  const toggleDark = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleDark,
    //----------
    images,
    favourites,
    // fetchMoreImages,
    fetchImages,
    addFav,
    delFav,
    fetchFromIDB,
    allImages,
    favImages,
  };
});
