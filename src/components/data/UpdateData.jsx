import React, { Component } from "react";
import axios from "axios";
class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || {},
    };
  }
  encodeImageFileAsURL = (element) => {
    const { files } = element.target;
    let file = files[0];
    console.log("base64", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const toBase64 = reader.result;
      console.log("base64", toBase64);
      this.setState({ data: { ...this.state.data, file: file, toBase64 } });
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const { endpoint, method, fetchData, closeModal } = this.props;
    console.log("for update", this.state.data);
    const formData = new FormData();
    for (let paramKey in this.state.data) {
      let value = this.state.data[paramKey];
      console.log(paramKey);
      formData.append(paramKey, value);
    }

    console.log("for update", formData);

    axios.put(endpoint, formData).then((result) => {
      console.log(result);
    });
    // console.log(response);
    // if (response.ok) {
    //   // let data = await response.json();
    //   // console.log(data);
    //   // this.setState({
    //   //   id: data.id,
    //   // });
    //   console.log("updates");
    //   //closeModal();
    //   // fetchData();
    // } else {
    //   let error = await response.json();
    //   console.log(error);
    // }
  };

  render() {
    const { data } = this.state;
    return React.cloneElement(this.props.children, {
      state: this.state,
      setData: (state) => this.setState({ data: { ...data, ...state } }),
      onSubmit: (e) => this.onSubmit(e),
      encodeImageFileAsURL: (element) => this.encodeImageFileAsURL(element),
      ...this.state,
    });
  }
}

export default UpdateData;
