import { defineStore } from "pinia";
import { ref, reactive, toRaw, watch, computed } from "vue";
import axios from "axios";
import { addItems, getItems, hasItems } from "@/indexedDB";

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
    return images.value.map((image) => {
      const isLiked = favourites.value.some((fav) => {
        return fav.image !== undefined ? fav.image.id === image.id : false;
      });
      return { ...image, isLiked };
    });
  });

  // const likedImages = computed(() => {
  //   return favourites.value.map((fav) => ({
  //     ...fav.image,
  //     isLiked: true,
  //     favID: fav.id,
  //   }));
  // });

  const addFav = async (image) => {
    // adding to local array
    image.isLiked = true;

    try {
      const response = await axios.post(
        "https://api.thecatapi.com/v1/favourites",
        { image_id: image.id },
        { headers: { "x-api-key": catApiKey } },
      );
      favourites.value.push({
        id: response.data.id,
        image_id: image.id,
        image: image,
      });
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const delFav = async (image) => {
    // deleting from local array
    image.isLiked = false;

    try {
      const fav = favourites.value.find((el) => el.image.id === image.id);
      await axios.delete(`https://api.thecatapi.com/v1/favourites/${fav.id}`, {
        headers: { "x-api-key": catApiKey },
      });
      favourites.value = favourites.value.filter(
        (fav) => fav.image.id !== image.id,
      );
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const fetchFavourites = async () => {
    try {
      console.log("fetching favourites...");
      const response = await axios.get(
        "https://api.thecatapi.com/v1/favourites",
        {
          params: {
            limit: 50,
            order: "DESC",
          },
          headers: {
            "x-api-key": catApiKey,
          },
        },
      );
      // favourites.value = response.data.map((el) => ({
      //   ...el.image,
      //   isLiked: true,
      // }));
      favourites.value = response.data;
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: 9,
            // has_breeds: 1,
            // order: "RAND",
          },
          headers: {
            "x-api-key": catApiKey,
          },
        },
      );
      images.value = response.data;
      // await addItems(toRaw(images.value));
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const fetchMoreImages = async () => {
    try {
      console.log("trying to get more images");
      currentPage.value++;
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: postsPerPage,
            // order: "DESC",
            page: currentPage.value,
          },
        },
      );
      images.value = [...images.value, ...response.data];
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const toggleDark = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleDark,
    //----------
    images,
    favourites,
    fetchMoreImages,
    fetchImages,
    fetchFavourites,
    addFav,
    delFav,
    allImages,
    // likedImages,
  };
});
