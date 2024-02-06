import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        {/* <header>
          <div className="continue-shopping"> */}
            {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
            {/* <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8CAgIAAADR0dFLS0vm5uY8PDwJCQkjIyPU1NRJSUn5+fnb29vi4uI0NDRQUFCCgoKMjIyrq6vLy8uamporKysVFRVlZWWGhoZeXl5BQUF4eHjx8fGSkpJWVlaioqK/v7+ysrISEhIgICDExMR0dHRra2unp6cndLdhAAAEKElEQVR4nO2d2XbiMBBETRNMglmcxSZAIEC2///DMRNkIFgGMuplTN2nedE5XaOi3WotiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjxkk7jn0xnA+2wwjHIqZK2dmDB6FGrCqIX7cgC0Sefwift0ALx6FHYoql2aIHwzWExiX3t2ALh+R0WEpti0/5xGt0q7GmHFoqXNLvdJ9tKbI5Nj5g5hXPtSLh4dDZtSjY95mps2roCmw61I2Ejdza9046Ei9RN4r12JFy4YpVy7Ui4SDI3ic236bN2JFy0m2/Tocumj9qhcFHaNNWOhIsym2aJdihMuGwKm/7HlNmU8vW6uqMamLF0Ezp3kyjGULhD++zrUHEh3ma/k1condRyYYnU7QgrvJdWuBAWWNhUViI9SCt0tamUQJI2qbRNNVrssjalV3mFSSyqUN6ksjalTEGgqE119vIEbaq1gyBnU632upxN1XrPmZBCvf2DuZTCoVY7yHtSI7RCvc7zm4hCzTNmMjbVM+nGpiIKNRt6Ekso3YOQEjbVqUkdEtlUeQ9vyq5Q+7Quv03pTVWggE3Vz0N4j2cGU6h99OqJWSHdKgtkt6mBs2W8K30L5wN5bapZkzp4baqeSTdw1qYWTLqxKZ9EivVNGkUDToUWTMppUytHWPmyqYVMuqHDZlMjJuWrTa2YNIpeuRSqru734cqmZkwaRSMWhXZMypVNqautawePTQ2ZNIpuWBTaMSlPNtVf3e/DYVNTJmXpm5oyKYdNrdSkjvC1qbkLOaFtqt3MP+YrtELpc90nCW1Tg/ccwn70bbSgDtnZNMjlgy9tPceUNqV4dPNbehtuRpPU1rdwy6Lx14OdTbW3NPnolHehGvRO1iGlTcUvDkjx4BSOtCPhwi2haG2tHAnGwv0Q37Uj4aK0qb2KKxBlNh22f8WdxqWKy3C16e+LtfFSW0M9K1eb/kNBmln+ESezAOsLotRW+2KPZBxkjVhY1arEEDP4LXGmLaWaZbBVPtFKW0wVya3vIdBaPGO01VSx8sxg3q3DcyXcZPG+qIy1qOA6dXgeSLX4oF/iM1z9bHhm3uIrvr6rF/RRO8yTfy0+C7P0KZzUDqv2djFsKRP2BXgV1r+F4DsBYFDhuy/Uce2wsc+l9qrTjk9h/VrRc5vB0jGMEl8uXdaO8hRC1JIJ+iKqs+KpR1c8Hxn6FIr6EqrvPZ8MtfI/xt7m4V+qksbp7nDlrpzRfuSgexzrGbclKk4AmO2aH2eNE5/7bz5+DjO6eNqwOoyVaHLOYj35/DnM4sJiS7u7W/EV/zp3m21+MKprryTdI5nv/qbJ5Px96v6kHLWeW23SOJL3dDSNe+Ovy5LF4OGzF8ejdGldHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwlfwBc0M7F8XMdx4AAAAASUVORK5CYII=" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header> */}

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      {/* <header>
        <div className="continue-shopping"> */}
          {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
          {/* <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8CAgIAAADR0dFLS0vm5uY8PDwJCQkjIyPU1NRJSUn5+fnb29vi4uI0NDRQUFCCgoKMjIyrq6vLy8uamporKysVFRVlZWWGhoZeXl5BQUF4eHjx8fGSkpJWVlaioqK/v7+ysrISEhIgICDExMR0dHRra2unp6cndLdhAAAEKElEQVR4nO2d2XbiMBBETRNMglmcxSZAIEC2///DMRNkIFgGMuplTN2nedE5XaOi3WotiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjxkk7jn0xnA+2wwjHIqZK2dmDB6FGrCqIX7cgC0Sefwift0ALx6FHYoql2aIHwzWExiX3t2ALh+R0WEpti0/5xGt0q7GmHFoqXNLvdJ9tKbI5Nj5g5hXPtSLh4dDZtSjY95mps2roCmw61I2Ejdza9046Ei9RN4r12JFy4YpVy7Ui4SDI3ic236bN2JFy0m2/Tocumj9qhcFHaNNWOhIsym2aJdihMuGwKm/7HlNmU8vW6uqMamLF0Ezp3kyjGULhD++zrUHEh3ma/k1condRyYYnU7QgrvJdWuBAWWNhUViI9SCt0tamUQJI2qbRNNVrssjalV3mFSSyqUN6ksjalTEGgqE119vIEbaq1gyBnU632upxN1XrPmZBCvf2DuZTCoVY7yHtSI7RCvc7zm4hCzTNmMjbVM+nGpiIKNRt6Ekso3YOQEjbVqUkdEtlUeQ9vyq5Q+7Quv03pTVWggE3Vz0N4j2cGU6h99OqJWSHdKgtkt6mBs2W8K30L5wN5bapZkzp4baqeSTdw1qYWTLqxKZ9EivVNGkUDToUWTMppUytHWPmyqYVMuqHDZlMjJuWrTa2YNIpeuRSqru734cqmZkwaRSMWhXZMypVNqautawePTQ2ZNIpuWBTaMSlPNtVf3e/DYVNTJmXpm5oyKYdNrdSkjvC1qbkLOaFtqt3MP+YrtELpc90nCW1Tg/ccwn70bbSgDtnZNMjlgy9tPceUNqV4dPNbehtuRpPU1rdwy6Lx14OdTbW3NPnolHehGvRO1iGlTcUvDkjx4BSOtCPhwi2haG2tHAnGwv0Q37Uj4aK0qb2KKxBlNh22f8WdxqWKy3C16e+LtfFSW0M9K1eb/kNBmln+ESezAOsLotRW+2KPZBxkjVhY1arEEDP4LXGmLaWaZbBVPtFKW0wVya3vIdBaPGO01VSx8sxg3q3DcyXcZPG+qIy1qOA6dXgeSLX4oF/iM1z9bHhm3uIrvr6rF/RRO8yTfy0+C7P0KZzUDqv2djFsKRP2BXgV1r+F4DsBYFDhuy/Uce2wsc+l9qrTjk9h/VrRc5vB0jGMEl8uXdaO8hRC1JIJ+iKqs+KpR1c8Hxn6FIr6EqrvPZ8MtfI/xt7m4V+qksbp7nDlrpzRfuSgexzrGbclKk4AmO2aH2eNE5/7bz5+DjO6eNqwOoyVaHLOYj35/DnM4sJiS7u7W/EV/zp3m21+MKprryTdI5nv/qbJ5Px96v6kHLWeW23SOJL3dDSNe+Ovy5LF4OGzF8ejdGldHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwlfwBc0M7F8XMdx4AAAAASUVORK5CYII=" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header> */}

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        {/* <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p> */}

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        {/* <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div> */}
      </section>
    </>
  );
};

export default ContextCart;