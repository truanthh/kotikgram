import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);
  const counter = ref(0);

  const isPostsLoading = ref(false);
  const currentPage = ref(1);
  const postsPerPage = 10;
  const pagesTotal = ref(0);

  const fetchPosts = async () => {
    try {
      isPostsLoading.value = true;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: currentPage.value,
            _limit: postsPerPage,
          },
        },
      );
      pagesTotal.value = Math.ceil(
        response.headers["x-total-count"] / postsPerPage,
      );
      posts.value = response.data;
    } catch (error) {
      alert(error);
    } finally {
      isPostsLoading.value = false;
    }
  };

  const loadMorePosts = async () => {
    try {
      currentPage.value++;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: currentPage.value,
            _limit: postsPerPage,
          },
        },
      );
      pagesTotal.value = Math.ceil(
        response.headers["x-total-count"] / postsPerPage,
      );
      posts.value = [...posts.value, ...response.data];
    } catch (error) {
      alert(error);
    } finally {
    }
  };

  return { posts, counter, fetchPosts };
});
