export default function Footer() {
  return (
    <div className="flex justify-center bg-slate-900 mt-5">
      <div className="container py-14 ">
        <div className="w-full flex items-center justify-between">
          <p className="DinningPhilosophers text-2xl text-gray-300 font-extrabold capitalize">
            Dinning
            <br />
            Philosophers
          </p>
          <p className="©2023-2023 | Dinning Philosophers Inc. font-extrabold text-slate-400">
            © 2023-2023 | Dinning Philosophers Inc.
          </p>
          <div className="Socialmedia links flex space-x-6 items-start justify-start">
            <img
              className="Social-media-icon w-8 h-full rounded-lg"
              src="https://via.placeholder.com/32x32"
            />
            <img
              className="Social-media-icon w-8 h-full rounded-lg"
              src="https://via.placeholder.com/32x32"
            />
            <img
              className="Social-media-icon w-8 h-full rounded-lg"
              src="https://via.placeholder.com/32x32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
