import { BsCart3 } from "react-icons/bs";

function CartWidget() {
    return (
        <div className="mt-4 text-center">
            <button
                className="btn btn-secondary position-relative rounded-circle"
                style={{ width: '40px', height: '40px', bottom: "10px" }}
            >
                <BsCart3 />
                <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
                    style={{ fontSize: '0.75rem', padding: "5px 7px" }}
                >
                    2
                </span>
            </button>
        </div>
    )
}

export default CartWidget;