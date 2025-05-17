'use client'
export default function Banner({image}) {
    return (
      <div className="w-full h-[300px] overflow-hidden pb-4 opacity-85">
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    );
  }
  