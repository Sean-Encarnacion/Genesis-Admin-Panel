import { MainContainer, MainModal } from "./ReservationModal.style";

export const ReservationModal = (props) => {

  return (
    props.isOpen ? (
      <MainContainer>
      <MainModal>
        <div className="main-body">
          <span>Check in date: <span className="data">{props.reservation.checkInDate}</span></span>
          <span>Check out date: <span className="data">{props.reservation.checkOutDate}</span></span>
          <span>Contact number: <span className="data">{props.reservation.contactNumber}</span></span>
          <span>Number of visitors: <span className="data">{props.reservation.numberOfVisitors}</span></span>
          <span>Total bill: P<span className="data">{props.reservation.totalBill}.00</span></span>
        </div>
        <button className="close-btn" onClick={props.func}>Done</button>
      </MainModal>
    </MainContainer>
    ):(
      <></>
    )
  );
};
