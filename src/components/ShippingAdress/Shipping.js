import React, { useRef, useState } from "react";
import "./Shipping.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
function Shipping() {
  const [countryInputValue, setCountryInputValue] = useState("");

  const countryInputRef = useRef();

  const onChangeHandler = (e) => {
    setCountryInputValue(e.target.value);
  };

  const onSelectClick = () => {
    setCountryInputValue(countryInputRef.current.value);
    console.log(countryInputRef.current.value);
  };

  return (
    <section className='shipping-info'>
      <p className='shipping-info-title'>Shipping address</p>
      <label htmlFor='name'>Full name</label>
      <div className='name-input-cont'>
        <AccountCircleRoundedIcon className='email-icon' />

        <input type='text' id='name' name='name' placeholder='Full name...' />
      </div>

      <label htmlFor='adress'>Address</label>
      <div className='adress-input-cont'>
        <HomeRoundedIcon className='adress-icon' />

        <input
          type='adress'
          id='adress'
          name='adress'
          placeholder='Your adress...'
        />
      </div>

      <label htmlFor='city'>City</label>
      <div className='city-input-cont'>
        <LocationCityRoundedIcon className='city-icon' />

        <input
          type='text'
          id='city'
          name='city'
          placeholder='Enter your city...'
        />
      </div>

      <div className='country-and-postalcode'>
        <div className='for-flex'>
          <label htmlFor='country'>Country</label>
          <div className='country-input-cont'>
            <PublicRoundedIcon className='country-icon' />

            <input
              type='text'
              id='country'
              name='country'
              placeholder='Your country..'
              value={countryInputValue}
              onChange={onChangeHandler}
            />
            <select ref={countryInputRef} onClick={onSelectClick}>
              <option value='Georgia'>Georgia</option>
              <option value='U.S.A'>U.S.A</option>
              <option value='U.K'>U.K</option>
              <option value='Ukraine'>Ukraine</option>
              <option value='France'>France</option>
              <option value='Cnada'>Cnada</option>
              <option value='Japan'>Japan</option>
              <option value='Moldova'>Moldova</option>
              <option value='India'>India</option>
              <option value='Spain'>Spain</option>
              <option value='Belgium'>Belgium</option>
              <option value='Norway'>Norway</option>
              <option value='Turkey'>Turkey</option>
            </select>
          </div>
        </div>
        <div className='for-flex'>
          <label htmlFor='country'>Postal code</label>
          <div className='postcode-input-cont'>
            <PublicRoundedIcon className='postcode-icon' />

            <input
              type='number'
              id='postcode'
              name='postcode'
              placeholder='Your postcode..'
            />
          </div>
        </div>
      </div>
      <div className='save'>
        <input
          className='save-input'
          type='checkbox'
          id='save'
          name='save'
          value='save'
        />
        <label for='vehicle1'> save this information for next time</label>
      </div>
    </section>
  );
}

export default Shipping;
