import { defineStore } from "pinia";
import { ref, reactive, toRaw } from "vue";
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

  // this is not used atm cuz i want new random images every time
  const initializeImages = async () => {
    try {
      const hasData = await hasItems();
      if (hasData) {
        await loadImages();
      } else {
        await fetchImages();
      }
    } catch (error) {
      console.error("Error initializing images", error);
    }
  };

  // this is not used atm cuz i want new random images every time
  const loadImages = async () => {
    try {
      const items = await getItems();
      images.value = [...items];
      console.log("Images loaded from IndexedDB", images.value);
    } catch (error) {
      console.error("Error loading images from IndexedDB", error);
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

  const addToFav = async (image) => {
    try {
      const newFavourite = await axios.post(
        "https://api.thecatapi.com/v1/favourites",
        { image_id: image.id },
        { headers: { "x-api-key": catApiKey } },
      );
    } catch (error) {
      alert(error);
    } finally {
      // image.favourites = !image.favourites;
    }
  };

  const fetchFavourites = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/favourites",
        {
          params: {
            limit: 9,
          },
          headers: {
            "x-api-key": catApiKey,
          },
        },
      );
      favourites.value = response.data;
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const toggleDark = () => {
    isDark.value = !isDark.value;
  };

  return {
    loadImages,
    initializeImages,
    images,
    favourites,
    toggleDark,
    isDark,
    addToFav,
    fetchMoreImages,
    fetchImages,
    fetchFavourites,
  };
});
