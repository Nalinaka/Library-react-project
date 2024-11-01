import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Ratings from "./Ratings";

const Book = ({ book }) => {
  const [img, setImg] = useState();


  const mountedRef = useRef(true);


  // This loads image from JavaScript
  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
      if (mountedRef.current) {
        setImg(image);
      }
      }, 300);
    };
    return () => {
  // When the component unmounts
    mountedRef.current = false; 
    }

  })
  // This skeleton code gives it that gray loading state, we use onLoad
  return (
    <div className="book">
      {!img ? (
            <>
        <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={img.src} alt="" className="book__img"/>
        </figure>
      </Link>
      <div clLinkssName="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
              <div className="book__img--skeleton"></div>
              <div className="skeleton book__title--skeleton"></div>
              <div className="skeleton book__rating--skeleton"></div>
              <div className="skeleton book__price--skeleton"></div>
            </> 
            </div>
            </div>
          // ) : (
  );
};

export default Book;

{/* // When we switch routes dont set image to unmounted component
//   const mountedRef = useRef(true);

//   useEffect(() => {
//     const image = new Image();
//     image.src = book.url;
//     image.onload = () => {
//       setTimeout(() => {
//         if (mountedRef.current) {
//           setImg(image);
//         }
//       }, 300);
//     };
//     return () => {
//       // When the component unmounts
//       mountedRef.current = false;
//     };
//   }, [book.url]);

//   return (
//     <div className="book">
//       {!img ? (
//         <>
//           <div className="book__img--skeleton"></div>
//           <div className="skeleton book__title--skeleton"></div>
//           <div className="skeleton book__rating--skeleton"></div>
//           <div className="skeleton book__price--skeleton"></div>
//         </>
//       ) : (
//         <>
//           <Link to={`/books/${book.id}`}>
//             <figure className="book__img--wrapper">
//               <img className="book__img" src={img.src} alt="" />
//             </figure>
//           </Link>
//           <div className="book__title">
//             <Link to={`/books/${book.id}`} className="book__title--link">
//               {book.title}
//             </Link>
//           </div>
//           <Ratings rating={book.rating} />
//           <Price
//             originalPrice={book.originalPrice}
//             salePrice={book.salePrice}
//           />
//         </>
//       )}
//     </div>
//   );
// };*/ }
