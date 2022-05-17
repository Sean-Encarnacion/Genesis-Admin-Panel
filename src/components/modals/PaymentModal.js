import { MainContainer, MainModal } from "./ReservationModal.style";

export const PaymentModal = (props) => {

  return (
    props.isOpen ? (
      <MainContainer>
      <MainModal>
        <div className="main-body">
          <span>Email: <span className="data">{props.proofOfPayment.email}</span></span>
          <span>Reference number: <span className="data">{props.proofOfPayment.referenceNumber}</span></span>
          <span>Proof of payment: <span className="data">{props.proofOfPayment.proof}</span></span>
        </div>
        <button className="close-btn" onClick={props.func}>Done</button>
      </MainModal>
    </MainContainer>
    ):(
      <></>
    )
  );
};
