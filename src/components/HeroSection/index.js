import React, { useState } from "react";
import api from "../../features/api/api.js";
import { Button } from "../ButtonElements.js";
import {
  Container,
  Panel,
  Title,
  Input,
  NavBtn,
  NavBtnLink,
} from "./HeroElements.js";
import { ReservationModal } from "../modals/ReservationModal.js";
import { PaymentModal } from "../modals/PaymentModal.js";

const HeroSection = () => {
  const [reservationModal, toggleReservationModal] = useState(false);
  const [popModal, togglePopModal] = useState(false);
  const [reservationData, setReservationData] = useState({});
  const [popData, setPopData] = useState({});
  // const [hover, setHover] = useState(false)
  // const [isOpenModal, setIsOpenModal] = useState(false)

  // const handleSignInNavBar = (e) => {
  //     setIsOpenModal(!isOpenModal)
  // }

  // const onHover = () => {
  //     setHover(!hover)
  // }

  const [ridInput, setRidInput] = useState("");
  const [pidInput, setPidInput] = useState("");

  const handleRidInputChange = (e) => {
    setRidInput(e.target.value);
  };
  const handlePidInputChange = (e) => {
    setPidInput(e.target.value);
  };

  const handleRidClick = async e => {
    if (ridInput) {
      const data = await api.getReservation(ridInput);
      if (data.verified === true) {
        setReservationData(data);
        toggleReservationModal(!reservationModal);
      }
    } else {
      setPidInput("")
    }
  }

  const handlePidClick = async e => {
    if (pidInput) {
      const data = await api.getPayment(pidInput);
      if (data.verified === true) {
        setPopData(data);
        togglePopModal(!popModal);
      }
    }else {
      setRidInput("")
    }
  }

  return (
    <Container>
      <Panel>
        <Title>Reservations</Title>
        <Input
          type="text"
          name="RID"
          placeholder="Reservation ID"
          onChange={handleRidInputChange}
        />
        <NavBtn>
          <NavBtnLink to="#" onClick={handleRidClick}>
            Search
          </NavBtnLink>
        </NavBtn>
      </Panel>

      <Panel>
        <Title>Payments</Title>
        <Input
          type="text"
          name="PID"
          placeholder="Payment ID"
          onChange={handlePidInputChange}
        />
        <NavBtn>
          <NavBtnLink to="#" onClick={handlePidClick}>
            Search
          </NavBtnLink>
        </NavBtn>
      </Panel>

      <ReservationModal
        {...reservationData}
        isOpen={reservationModal}
        func={() => {
          toggleReservationModal(!reservationModal);
        }}
      />
      <PaymentModal
        {...popData}
        isOpen={popModal}
        func={() => {
          togglePopModal(!popModal);
        }}
      />
    </Container>
  );
};

export default HeroSection;
