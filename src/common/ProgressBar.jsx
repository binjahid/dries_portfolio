const ProgressBar = ({ title, width, color }) => {
  return (
    <div className="pb-2">
      <div className="flex justify-between items-center pb-2">
        <h2 className="">{title}</h2>
        <p>{width}</p>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 ">
        <div
          class={`${color} h-2.5 rounded-full`}
          style={{
            width: width,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
