export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload?.data?.message || "Something went wrong",
    code: payload?.status || 500
  };
};

export const handlePendingMore = (state) => {
  state.isLoadingMore = true;
  state.error = null;
};

export const handleErrorMore = (state, { payload }) => {
  state.isLoadingMore = false;
  state.error = {
    message: payload?.data?.message || "Something went wrong",
    code: payload?.status || 500
  };
};
