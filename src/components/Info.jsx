import React from "react";
import "./styles/info.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EmailIcon from '@mui/icons-material/Email';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: 'Susana Duque',
      email: 'susa@correo.com',
      date: '15 - nov - 1999',
      address: 'Calle 30',
      phone: '3212121211',
      password: 'susa123',
      info: 'My address email is',
      text: '',
    };
  }
  handleChange = (e, newValue) => {
    this.setState({
      value: newValue,
    });
    if(newValue === 0){
      this.setState({info: 'My address email is', text: this.state.email})
    } else if (newValue === 1){
      this.setState({info: 'My birthhday is on', text: this.state.date})
    }else if (newValue === 2){
      this.setState({info: 'My name is', text: this.state.name})
    }else if (newValue === 3){
      this.setState({info: 'My address is', text: this.state.address})
    }else if (newValue === 4){
      this.setState({info: 'My phone number is', text: this.state.phone})
    }else if (newValue === 5){
      this.setState({info: 'My password is', text: this.state.password})
    }

  }

  render() {
    const { email } = this.props.data;
    return (
      <div className="info">
        <h4 className="text">{this.state.info} </h4>
        <h2 className="text-email">{this.state.text}</h2>
        <Tabs  onChange={this.handleChange} value={this.state.value} centered>
          <Tab  icon={<EmailIcon />} />
          <Tab  icon={<DateRangeIcon />} />
          <Tab  icon={<AccountCircleIcon />} />
          <Tab  icon={<MapIcon />} />
          <Tab  icon={<LocalPhoneIcon />} />
          <Tab  icon={<LockIcon />} />
        </Tabs>
      </div>
    );
  }
}

export default Info;
