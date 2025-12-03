const LoadingState = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-base-300/30 border border-base-300/20 rounded-2xl p-6 animate-pulse"
        >
          <div className="h-48 bg-base-300 rounded-xl mb-4"></div>
          <div className="h-6 bg-base-300 rounded mb-3"></div>
          <div className="h-4 bg-base-300 rounded mb-2"></div>
          <div className="h-4 bg-base-300 rounded mb-4"></div>
          <div className="h-10 bg-base-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
