import onLoadMore from "./on-load-more";

const options = {
  threshold: 0.5,
};

const io = new IntersectionObserver(onLoadMore, options);

export default io;
