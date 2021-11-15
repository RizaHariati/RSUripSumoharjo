import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "../context";

const DataPasien = () => {
  return (
    <div className="banner ex-menu-content">
      {/* <div className="background-utama"></div> */}
      <div className="ex-menu-header">
        <h1>Mengakses Data Pasien Secara Online</h1>
        <div className="line" />
        <div className="ex-menu-list">
          <h3>
            Dengan mendaftar secara online Anda mendapatkan kemudahan untuk:
          </h3>
          <h4>
            <span> &#10003;</span> Membayar tagihan Anda via Internet
          </h4>
          <h4>
            <span> &#10003;</span>Melihat rekam medis{" "}
          </h4>
          <h4>
            <span> &#10003;</span> Melihat hasil laboratorium dan tes kesehatan{" "}
          </h4>
        </div>
      </div>
      <AksesDataPasien />
    </div>
  );
};

export default DataPasien;

export const AksesDataPasien = () => {
  const { setDataOnline } = useGlobalContext();
  const [login, setLogin] = useState(true);
  const [dataRegister, setDataRegister] = useState([]);
  const [showAlert, setShowAlert] = useState({ state: false, text: "" });

  let history = useHistory();

  const handleRegister = (data, { resetForm }) => {
    setDataRegister([...dataRegister, data]);
    alerting("pendaftaran berhasil");
    resetForm();
  };

  const handleLogin = (data, { resetForm }) => {
    const { email, password, registrasi } = data;
    const newData = dataRegister.find((item) => item.email === email);
    if (newData) {
      if (newData.password1 === password && newData.registrasi === registrasi) {
        setDataOnline(newData);
        history.push("/pasienpage");
      } else {
        alerting("password/nomor registrasi tidak sesuai");
      }
    } else {
      alerting("akun tidak ditemukan");
    }
    resetForm();
  };
  const alerting = (text) => {
    setShowAlert({ state: true, text: text });
    setTimeout(() => {
      setShowAlert({ state: false, text: "" });
    }, 1500);
  };

  return (
    <div className="data-pasien-container">
      <div className="pasien-form">
        <div className="pasien-btn-container">
          <button
            className={login ? "pasien-btn active" : "pasien-btn "}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={!login ? "pasien-btn active" : "pasien-btn "}
            onClick={() => {
              setLogin(false);
            }}
          >
            Daftar
          </button>
        </div>

        {login && <Login port={{ handleLogin, showAlert }} />}
        {!login && <Register port={{ handleRegister, showAlert }} />}
      </div>
    </div>
  );
};

const Login = ({ port }) => {
  const { handleLogin, showAlert } = port;
  const initLogin = {
    email: "",
    password: "",
    registrasi: "",
  };
  const valSchema = Yup.object().shape({
    email: Yup.string().email().required("email harus diisi"),
    password: Yup.string().required("password harus diisi"),
    registrasi: Yup.number()
      .typeError("harus dalam bentuk angka")
      .required("nomor registrasi harus diisi"),
  });
  return (
    <div className="pasien-login">
      <img src="/assets/images/logo bulat.jpg" alt="logo" />
      <Formik
        initialValues={initLogin}
        onSubmit={handleLogin}
        validationSchema={valSchema}
      >
        <Form className="formik-login">
          <div className="login-form">
            <label name="email">email</label>
            <ErrorMessage name="email" component="p" />
            <Field id="email" name="email" className="field-login" />
          </div>
          <div className="login-form">
            <label name="password">password</label>
            <ErrorMessage name="password" component="p" />
            <Field
              type="password"
              id="password"
              name="password"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="registrasi">nomor registrasi</label>
            <ErrorMessage name="registrasi" component="p" />
            <Field id="registrasi" name="registrasi" className="field-login" />
            <p>nomor registrasi diberikan RS Urip Sumoharjo saat pendaftaran</p>
          </div>

          <button type="submit" className="login-btn">
            login
          </button>
          {showAlert.state && <h4>{showAlert.text} </h4>}
        </Form>
      </Formik>
    </div>
  );
};

const Register = ({ port }) => {
  const { handleRegister, showAlert } = port;
  const initRegister = {
    nama: "",
    email: "",
    password1: "",
    password2: "",
    registrasi: "",
  };
  const valSchema = Yup.object().shape({
    nama: Yup.string().required("nama harus diisi"),
    email: Yup.string().email().required("email harus diisi"),
    password1: Yup.string().required("password harus diisi"),
    password2: Yup.string().oneOf(
      [Yup.ref("password1"), null],
      "Password tidak sama"
    ),
    registrasi: Yup.number()
      .typeError("harus dalam bentuk angka")
      .required("nomor registrasi harus diisi"),
  });
  return (
    <div className="pasien-login">
      <img src="/assets/images/logo bulat.jpg" alt="logo" />
      <Formik
        initialValues={initRegister}
        onSubmit={handleRegister}
        validationSchema={valSchema}
      >
        <Form className="formik-login">
          <div className="login-form">
            <label name="nama">nama lengkap</label>
            <ErrorMessage name="nama" component="p" />
            <Field id="nama" name="nama" className="field-login" />
          </div>
          <div className="login-form">
            <label name="email">email</label>
            <ErrorMessage name="email" component="p" />
            <Field id="email" name="email" className="field-login" />
          </div>
          <div className="login-form">
            <label name="password1">password</label>
            <ErrorMessage name="password1" component="p" />
            <Field
              type="password"
              id="password1"
              name="password1"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="password2">konfirmasi password</label>
            <ErrorMessage name="password2" component="p" />
            <Field
              type="password"
              id="password2"
              name="password2"
              className="field-login"
            />
          </div>
          <div className="login-form">
            <label name="registrasi">nomor registrasi</label>
            <ErrorMessage name="registrasi" component="p" />
            <Field id="registrasi" name="registrasi" className="field-login" />
            <p>nomor registrasi diberikan RS Urip Sumoharjo saat pendaftaran</p>
          </div>

          <button type="submit" className="login-btn">
            daftarkan
          </button>
          {showAlert.state && <h4>{showAlert.text}</h4>}
        </Form>
      </Formik>
    </div>
  );
};
