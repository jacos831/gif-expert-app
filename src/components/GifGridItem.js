import React from 'react'

export const GifGridItem = ({title, url}) => { // asi si recibo las propiedades por el operador spread ...
// export const GifGridItem = ({img:{id, title, url}}) => { // si solo recibo el objeto completo
    // console.log(img)
    return (
      <div className="card animate__animated animate__fadeIn">
        <img src={url} alt={title} /><br />
        <small>{title}</small>
      </div>
    );
}
