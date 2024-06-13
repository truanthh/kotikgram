import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);

  const isPostsLoading = ref(false);
  const currentPage = ref(1);
  const postsPerPage = 10;
  const pagesTotal = ref(0);

  async function fetchPosts() {
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
  }

  return { posts, fetchPosts };
});
