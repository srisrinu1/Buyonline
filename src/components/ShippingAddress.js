import React, { useEffect } from "react";

import styled from "styled-components";
import { useUserContext } from "../context/user_context";

const ShippingAddress = () => {
  const { myUser, address, setAddress } = useUserContext();

  const handleInputChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress({ ...address, saved: true });
  };

  useEffect(() => {
    if (localStorage.getItem("address")) {
      setAddress(JSON.parse(localStorage.getItem("address")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(address));
  }, [address]);
  return (
    <Wrapper>
      <>
        <form onSubmit={handleSubmit}>
          <h4>Shipping Address</h4>

          <label>Name</label>
          <input
            type="text"
            className="user-name"
            disabled={true}
            required
            value={myUser?.name}
          />
          <label htmlFor="house">Flat / House / Office No.</label>
          <input
            type="text"
            name="house"
            required
            autoComplete="off"
            value={address.house}
            onChange={handleInputChange}
            disabled={address.saved}
          />
          <label htmlFor="street">Street / Society / Office Name</label>
          <input
            type="text"
            name="street"
            required
            autoComplete="off"
            value={address.street}
            onChange={handleInputChange}
            disabled={address.saved}
          />
          <label htmlFor="city">City / Town </label>
          <input
            type="text"
            name="city"
            required
            autoComplete="off"
            value={address.city}
            onChange={handleInputChange}
            disabled={address.saved}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            required
            autoComplete="off"
            value={address.state}
            onChange={handleInputChange}
            disabled={address.saved}
          />
          <label htmlFor="pin">Pincode</label>
          <input
            type="number"
            name="pin"
            required
            autoComplete="off"
            value={address.pin}
            onChange={handleInputChange}
            disabled={address.saved}
          />

          {!address.saved && (
            <button className="btn" type="submit">
              Save Address
            </button>
          )}
        </form>
        {address.saved && (
          <button
            className="btn"
            type="button"
            onClick={() => setAddress({ ...address, saved: false })}
          >
            Edit Address
          </button>
        )}
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 2rem;
  .user-name {
    text-transform: capitalize;
  }
  label {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    background: var(--clr-primary-10);
    font-size: 1rem;
    margin-bottom: 1rem;
    border-radius: var(--radius);
    border: transparent;
    outline: none;
  }

  input:focus {
    outline: 1px solid var(--clr-primary-2);
  }
`;

export default ShippingAddress;