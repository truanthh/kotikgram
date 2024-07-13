import { defineStore } from "pinia";
import { ref, reactive, computed, toRaw } from "vue";
import axios from "axios";
import { addItems, getItems, hasItems } from "@/indexedDB";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);
  const images = ref([]);
  const counter = ref(0);

  const isPostsLoading = ref(false);
  const currentPage = ref(1);
  const postsPerPage = 10;
  const pagesTotal = ref(0);

  const isDark = ref(false);

  const catApiKey =
    "live_42WMqpulkHdqY3krKopYktUseCHCREhVZZw2LfNnfkorDLEdarm0YzoYgdgU73y5";

  const heartIcon = "src/assets/icons/heart.svg";
  const heartIcon_white = "src/assets/icons/heart-white.svg";
  const heartIcon_filled = "src/assets/icons/heart-filled.svg";

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
            limit: 18,
            // has_breeds: 1,
          },
          headers: {
            "x-api-key": catApiKey,
          },
        },
      );
      images.value = response.data;
      await addItems(toRaw(images.value));
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  const loadMorePosts = async () => {
    // try {
    //   currentPage.value++;
    //   const response = await axios.get(
    //     "https://api.thecatapi.com/v1/images/search",
    //     {
    //       params: {
    //         limit: postsPerPage,
    //         page: currentPage.value,
    //       },
    //     },
    //   );
    //   images.value = [...images.value, ...response.data];
    // } catch (error) {
    //   alert(error);
    // } finally {
    // }
  };

  const removePost = (post) => {
    posts.value.splice(
      posts.value.findIndex((el) => el.id === post.id),
      1,
    );
  };

  const addToFav = (image) => {
    image.favourites = !image.favourites;
    // console.log(image.favourites);
  };

  const toggleDark = () => {
    isDark.value = !isDark.value;
  };

  return {
    posts,
    counter,
    removePost,
    images,
    addToFav,
    toggleDark,
    isDark,
    loadMorePosts,
    fetchImages,
    loadImages,
    initializeImages,
  };
});
