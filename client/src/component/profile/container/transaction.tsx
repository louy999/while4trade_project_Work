const Transaction = (props) => {
  return (
    <div className="transaction">
      <div className="title">transaction</div>

      <div className="list">
        <div className="with">
          <div className="id">
            <span>id:</span> <span className="cont">123456</span>
          </div>
          <div className="prog">withdraw</div>
          <div className="price">
            <span>price:</span>
            <span className="cont">-52$</span>
          </div>
          <div className="time">08:09 AM 1/2/2023</div>
        </div>
        <div className="dep">
          <div className="id">
            <span>id:</span> <span className="cont">123456</span>
          </div>
          <div className="prog">deposit</div>
          <div className="price">
            <span>price:</span>
            <span className="cont">-52$</span>
          </div>
          <div className="point">
            <span>Point:</span>
            <span className="cont">+12345P</span>
          </div>
          <div className="time">08:09 AM 1/2/2023</div>
        </div>
        <div className="con">
          <div className="id">
            <span>id:</span> <span className="cont">123456</span>
          </div>
          <div className="prog">convert point to </div>
          <div className="price">
            <span>price:</span>
            <span className="cont">-52$</span>
          </div>
          <div className="point">
            <span>Point:</span>
            <span className="cont">+12345P</span>
          </div>
          <div className="time">08:09 AM 1/2/2023</div>
        </div>
        <div className="sub-b">
          <div className="id">
            <span>id:</span> <span className="cont">123456</span>
          </div>
          <div className="prog">subscribe by point</div>
          <div className="price">
            <span>price:</span>
            <span className="cont">-52$</span>
          </div>
          <div className="point">
            <span>Point:</span>
            <span className="cont">+12345P</span>
          </div>
          <div className="bundle">
            <span>Bundle:</span>
            <span className="cont">gold</span>
          </div>
          <div className="time">08:09 AM 1/2/2023</div>
        </div>
        <div className="sub-p">
          <div className="id">
            <span>id:</span> <span className="cont">123456</span>
          </div>
          <div className="prog">subscribe by point</div>
          <div className="price">
            <span>price:</span>
            <span className="cont">-52$</span>
          </div>
          <div className="point">
            <span>Point:</span>
            <span className="cont">+12345P</span>
          </div>
          <div className="bundle">
            <span>Bundle:</span>
            <span className="cont">gold</span>
          </div>
          <div className="time">08:09 AM 1/2/2023</div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
