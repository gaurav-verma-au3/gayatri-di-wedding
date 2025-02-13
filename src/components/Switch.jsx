/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 28px;
  border-radius: 100px;
  border: 2px solid #a88240;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 45px;
  transition: 0.2s;
  background: #a88240;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  /* ${SwitchLabel}:active & {
    width: 40px;
  } */
`;

const Switch = ({ id, toggled, onChange }) => {
  return (
    <>
      <SwitchInput className="switch-checkbox" id={id} type="checkbox" checked={toggled} onChange={onChange} />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button">
          <div style={{ fontSize: "0.6rem", fontWeight: "600", color: "#FFFEF1" }}>{toggled ? "En" : "हि॰"}</div>
        </SwitchButton>
      </SwitchLabel>
    </>
  );
};

export default Switch;
