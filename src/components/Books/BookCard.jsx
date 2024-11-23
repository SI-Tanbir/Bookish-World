import React from "react";

const BookCard = ({ data }) => {
  let { image, tags, bookName, author, category } = data;

  // console.log(image);

  //    img , tags , title, author ,geric
  //image,tags,bookName,author,category

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={image} alt={bookName} className="h-[200px] rounded-xl" />
        </figure>
        <div className="card-body ">
          <div className="flex ">
            {tags.map((res, index) => (
              <p
                className="border border-green-600 mr-2 rounded-lg"
                key={index}
              >
                #{res}
              </p>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>by:{author}</p>
        
        </div>
      </div>
    </div>
  );
};

export default BookCard;
