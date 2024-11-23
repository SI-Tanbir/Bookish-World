import React from "react";
import data from "../../assets/bookData.json";
import BookCard from "./BookCard";
const Books = () => {
  // console.log(data);

  let book = data.books;

  return (
    <div>
      <p className="text-4xl text-center">Books</p>

      <div className="grid grid-cols-3">
        {/* starting of card    */}

        {book.map((res, index) => (
          <BookCard key={index} data={res}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
