import React, {useState, useEffect} from 'react'
import './newPatient.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import ReactLoading from 'react-loading';
const axios = require('axios').default;

export default function NewPatient({user}) {
    const [notification, setNotifications] = useState([]);
    const [error, setError] = useState(false);
    const [check, setCheck] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [country, setCountry] = useState("");
    const [county, setCounty] = useState("");
    const [age, setAge] = useState("");
    const [identityNumber, setIdentityNumber] = useState("");
    const [subCounty, setSubCounty] = useState("");
    const [village, setVillage] = useState("");
    const [gender, setGender] = useState("");
    const [telephone, setTelephone] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(false);

    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

    const addPatient = (e) => {
        e.preventDefault();

        setLoadingStatus(true);

        const details = {
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            age: age,
            village: village,
            telephone: telephone,
            county: county,
            country: country,
            sub_county: subCounty,
            identityNo: identityNumber
        }

        axios({
            method: 'post',
            url: 'https://ehrsystembackend.herokuapp.com/KNH/patient/register',
            data: details})
            .then((data) => {
                if (data.data.message == "Inserted Successfully") {
                    setError(false);
                    setCheck(true);
                    setLoadingStatus(false);
                    setTimeout(() => {
                        setCheck(false);
                    }, 3000);
                }
                else{
                    setLoadingStatus(false);
                    setError(true);
                    setCheck(false);
                    console.log("Null");
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                }                
            })
            .catch((error) => {
                setLoadingStatus(false);
                console.log(error);
            });
    }

    useEffect(() => {
        fetch(`https://ehrsystembackend.herokuapp.com/KNH/staff/viewNotifications?id=${user.username}`)
        .then(response => response.json())
        .then((data) => {
            if (data.message == "Found") {
                setNotifications(data.data);
                console.log(data);
            }
            else{
                console.log("no Notification");
            }
        })
    }, [])
    return (
        <div className="patientnewContainer">
            <div className="toolContainer">
                <div className="center">
                    <div className="search">
                        <p className="dashIntro">Dashboard</p>
                    </div>
                    <div className="rightIcons">
                        <Tooltip title="notifications">
                            <IconButton aria-label={notificationsLabel(1)} className="btnIcon" >
                                <Badge badgeContent={notification ? notification.length : 0} color="success" style={{height: "18px", width: "18px"}}>
                                    <NotificationsIcon className="iconColor" style={{height: "18px", width: "18px", color: "white"}}/>
                                </Badge>
                            </IconButton>
                            </Tooltip>
                        <p className="userName">{`${user.username}`}</p>
                        <Tooltip title="Profile">
                            <Avatar style={{height: "28px", width: "28px", backgroundColor: "white"}} className="avatar">
                                <PersonIcon style={{color: "black"}} />
                            </Avatar>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="bodyAll">
                <div className="breadcrumps">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" href="/">
                                Patients
                            </Link>
                            <Link
                            underline="hover"
                            color="text.primary"
                            href="#"
                            aria-current="page"
                            >
                                New Patient
                            </Link>
                        </Breadcrumbs>
                    </div>
                    {error ? <div className="alertOuter"><Alert severity="error" className="alert">Error!!..Not Added</Alert></div> : null}
                    {check ? <div className="alertOuter"><Alert severity="success" className="alert">New Patient Added</Alert></div> : null}
                    <div className="pendingContainer">
                        <div className="titlePending">
                            <p className="titleTxt">Adding New Patient</p>
                        </div>
                    <div className="profileBody">
                        <div className="profileDetails">
                            <form className="formProf">
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">First Name</label><br/>
                                        <input type="text" name="firstname" placeholder="First Name" required className="inputRegisterProf" onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="lastNProf">
                                        <label className="labelRegisterProf">Last Name</label><br/>
                                        <input type="text" name="lastname" placeholder="Last Name" required className="inputRegisterProf" onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">Age</label><br/>
                                        <input type="text" name="username" placeholder="Age" className="inputRegisterProf" onChange={(e) => setAge(e.target.value)} /><br/>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">Identity Number</label><br/>
                                        <input type="text" name="identity" placeholder="Identity Number" className="inputRegisterProf" onChange={(e) => setIdentityNumber(e.target.value)}/>
                                    </div>
                                    <div className="lastNProf">
                                    <label className="labelRegisterProf">Select Gender</label><br/>
                                        <select className="inputSelect" onChange={(e) => setGender(e.target.value)}>
                                            <option>Select---</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">Telephone</label><br/>
                                        <input type="phone" name="lastname" placeholder="Telephone" className="inputRegisterProf" onChange={(e) => setTelephone(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <div className="firstNProf">
                                        <label className="labelRegisterProf">Village</label><br/>
                                        <input type="text" name="firstname" placeholder="Village" className="inputRegisterProf" onChange={(e) => setVillage(e.target.value)} />
                                    </div>
                                    <div className="lastNProf">
                                        <label className="labelRegisterProf">Sub County</label><br/>
                                        <input type="text" name="lastname" placeholder="Sub County" className="inputRegisterProf" onChange={(e) => setSubCounty(e.target.value)}/>
                                    </div>
                                    <div className="userNProf">
                                        <label className="labelRegisterProf">Select County</label><br/>
                                        <select className="inputSelect" onChange={(e) => setCounty(e.target.value)}>
                                            <option>Select---</option>
                                            <option value="Baringo">Baringo</option>
                                            <option value='Bomet'>Bomet</option>
                                            <option value='Bungoma'>Bungoma</option>
                                            <option value='Busia'>Busia</option>
                                            <option value='Elgeyo-Marakwet'>Elgeyo-Marakwet</option>
                                            <option value='Embu'>Embu</option>
                                            <option value='Garissa'>Garissa</option>
                                            <option value='Homa Bay'>Homa Bay</option>
                                            <option value='Isiolo'>Isiolo</option>
                                            <option value='Kajiado'>Kajiado</option>
                                            <option value='Kakamega'>Kakamega</option>
                                            <option value='Kericho'>Kericho</option>
                                            <option value='Kiambu'>Kiambu</option>
                                            <option value='Kilifi'>Kilifi</option>
                                            <option value='Kirinyaga'>Kirinyaga</option>
                                            <option value='Kisii'>Kisii</option>
                                            <option value='Kisumu'>Kisumu</option>
                                            <option value='Kitui'>Kitui</option>
                                            <option value='Kwale'>Kwale</option>
                                            <option value='Laikipia'>Laikipia</option>
                                            <option value='Lamu'>Lamu</option>
                                            <option value='Machakos'>Machakos</option>
                                            <option value='Makueni'>Makueni</option>
                                            <option value='Mandera'>Mandera</option>
                                            <option value='Marsabit'>Marsabit</option>
                                            <option value='Meru'>Meru</option>
                                            <option value='Migori'>Migori</option>
                                            <option value='Mombasa'>Mombasa</option>
                                            <option value="Murang'a">Muranga'a</option>
                                            <option value='Nairobi City'>Nairobi City</option>
                                            <option value='Nakuru'>Nakuru</option>
                                            <option value='Nandi'>Nandi</option>
                                            <option value='Narok'>Narok</option>
                                            <option value='Nyamira'>Nyamira</option>
                                            <option value='Nyandarua'>Nyandarua</option>
                                            <option value='Nyeri'>Nyeri</option>
                                            <option value='Samburu'>Samburu</option>
                                            <option value='Siaya'>Siaya</option>
                                            <option value='Taita-Taveta'>Taita-Taveta</option>
                                            <option value='Tana River'>Tana River</option>
                                            <option value='Tharaka-Nithi'>Tharaka-Nithi</option>
                                            <option value='Trans Nzoia'>Trans Nzoia</option>
                                            <option value='Turkana'>Turkana</option>
                                            <option value='Uasin Gishu'>Uasin Gishu</option>
                                            <option value='Vihiga'>Vihiga</option>
                                            <option value='West Pokot'>West Pokot</option>
                                            <option value='wajir'>wajir</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <div className="firstN">
                                        <label className="labelRegisterProf">Select Country</label><br/>
                                        <select className="inputSelect" onChange={(e) => setCountry(e.target.value)}>
                                            <option>Select---</option>
                                            <option value="Afganistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bonaire">Bonaire</option>
                                            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Canary Islands">Canary Islands</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Channel Islands">Channel Islands</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Island">Cocos Island</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote DIvoire">Cote DIvoire</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Curaco">Curacao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Ter">French Southern Ter</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Great Britain">Great Britain</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="India">India</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea North">Korea North</option>
                                            <option value="Korea Sout">Korea South</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Midway Islands">Midway Islands</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Nambia">Nambia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherland Antilles">Netherland Antilles</option>
                                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                            <option value="Nevis">Nevis</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau Island">Palau Island</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Phillipines">Philippines</option>
                                            <option value="Pitcairn Island">Pitcairn Island</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                                            <option value="Republic of Serbia">Republic of Serbia</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="St Barthelemy">St Barthelemy</option>
                                            <option value="St Eustatius">St Eustatius</option>
                                            <option value="St Helena">St Helena</option>
                                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                            <option value="St Lucia">St Lucia</option>
                                            <option value="St Maarten">St Maarten</option>
                                            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                            <option value="Saipan">Saipan</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Samoa American">Samoa American</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Tahiti">Tahiti</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Erimates">United Arab Emirates</option>
                                            <option value="United States of America">United States of America</option>
                                            <option value="Uraguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City State">Vatican City State</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                            <option value="Wake Island">Wake Island</option>
                                            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zaire">Zaire</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="nameSectionProf">
                                    <button className="btnProf" onClick={addPatient}>Add Patient</button>
                                </div>
                                <div className="nameSectionProf">
                                {loadingStatus ? <div className="loadRow"><ReactLoading type="spinningBubbles" color="blue" height={30} width={30} className="loadBalls"/></div> : null}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
