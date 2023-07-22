/*importaciones*/
import { Link } from "react-router-dom"

function Categories({Category}) {
  return <Link className="categoria" to={`/categoria/${Category}`}>{Category}</Link>
}

export default Categories