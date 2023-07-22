/*importaciones*/

function Producto({info}) {

  return (
    <div className="producto">
        <img src={info?.image} />
        <div className="info">
            <span>{info?.title}</span>
            <p>{info?.description}</p>
                <button>$ {info?.price}</button>
        </div>
    </div>
  )
}

export default Producto