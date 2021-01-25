import onLoadMore from "./on-load-more";

const options = {
  threshold: 1,
};

const io = new IntersectionObserver(onLoadMore, options);

export default io;
