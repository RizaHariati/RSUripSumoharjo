import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useGlobalContext } from "../context";

import * as Yup from "yup";

const PendaftaranDetail = () => {
  const {
    initValue,
    dataPasien,
    setdataPasien,
    setDaftarSendiri,
    daftarSendiri,
    setModalDaftar,
  } = useGlobalContext();

  const handleSubmit = (data) => {
    if (daftarSendiri) {
      const newData = {
        ...data,
        pendaftar: "",
        usiaConsent: "",
        hubungan: "",
        telpPendaftar: "",
      };

      setdataPasien(newData);
    } else {
      setdataPasien(data);
    }
    setModalDaftar(true);
  };

  const validation = Yup.object().shape({
    // pendaftar: Yup.string(),
    usiaConsent: Yup.array().max(1, "Pilih satu saja"),
    hubungan: Yup.array().max(1, "Pilih satu saja"),
    telpPendaftar: Yup.number().typeError(
      "Nomor telepon harus dalam bentuk angka"
    ),
    pasien: Yup.string().required("Nama tidak boleh kosong"),
    alamat: Yup.string().required("alamat tidak boleh kosong"),
    kodepos: Yup.number().typeError("Kodepos harus dalam bentuk angka"),
    usia: Yup.number()
      .typeError("Usia harus dalam bentuk angka")
      .min(0, "Usia tidak boleh minus")
      .max(110, "Usia maximal 110 tahun")
      .required("Usia tidak boleh kosong"),
    telpPasien: Yup.number()
      .typeError("Nomor telepon harus dalam bentuk angka")
      .required("Telepon tidak boleh kosong"),
    fasilitas: Yup.string().required("Fasilitas tidak boleh kosong"),
  });
  return (
    <div className="ex-menu-subhead">
      <h1>Pendaftaran</h1>
      <div className="line" />
      <div className="form-container">
        <Formik
          initialValues={dataPasien || initValue}
          onSubmit={handleSubmit}
          validationSchema={validation}
          enableReinitialize
        >
          <Form>
            <fieldset>
              <legend>Informasi Pendaftar</legend>
              <div>
                <label>
                  Apakah Anda mendaftar sebagai pasien atau mendaftarkan orang
                  lain?
                </label>
                <div className="radio">
                  <label htmlFor="daftar-sendiri">
                    <input
                      type="radio"
                      checked={daftarSendiri}
                      id="daftar-sendiri"
                      onClick={() => setDaftarSendiri(true)}
                      readOnly
                    />
                    Sebagai Pasien
                  </label>

                  <label htmlFor="orang-lain">
                    <input
                      type="radio"
                      id="orang-lain"
                      checked={!daftarSendiri}
                      onClick={() => setDaftarSendiri(false)}
                      readOnly
                    />
                    Orang lain
                  </label>
                </div>
              </div>

              {!daftarSendiri && (
                <div>
                  <div className="field">
                    <label>Nama pendaftar</label>
                    <ErrorMessage name="pendaftar" component="span" />
                    <Field
                      type="text"
                      name="pendaftar"
                      id="pendaftar"
                      className="field-text"
                    />
                  </div>
                  <div className="field">
                    <label>Apakah pasien berusia dibawah 18 tahun?</label>
                    <ErrorMessage name="usiaConsent" component="span" />
                    <label>
                      <Field
                        type="checkbox"
                        name="usiaConsent"
                        value="ya"
                        className="field-check"
                      />
                      Ya
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="usiaConsent"
                        value="tidak"
                        className="field-check"
                      />
                      tidak
                    </label>
                  </div>

                  <div className="field">
                    <label>Hubungan dengan Pasien</label>
                    <ErrorMessage name="hubungan" component="span" />
                    <label>
                      <Field
                        type="checkbox"
                        name="hubungan"
                        value="orang tua/ wali"
                        className="field-check"
                      />
                      Saya Orang tua/Wali dari Pasien
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="hubungan"
                        value="anak"
                        className="field-check"
                      />
                      Saya Anak dari Pasien
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="hubungan"
                        value="suami/istri"
                        className="field-check"
                      />
                      saya suami/istri dari Pasien
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="hubungan"
                        value="perusahaan"
                        className="field-check"
                      />
                      Perusahaan
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="hubungan"
                        value="orang lain"
                        className="field-check"
                      />
                      Orang lain
                    </label>
                  </div>
                  <div className="field">
                    <label>Nomor telepon </label>
                    <ErrorMessage name="telpPendaftar" component="span" />
                    <Field
                      name="telpPendaftar"
                      id="telpPendaftar"
                      className="field-text"
                    />
                  </div>
                </div>
              )}
            </fieldset>

            <fieldset>
              <legend>Informasi Pasien</legend>
              <div className="field">
                <label>Nama Pasien </label>
                <ErrorMessage name="pasien" component="span" />
                <Field name="pasien" id="pasien" className="field-text" />
              </div>
              <div className="field">
                <label>Alamat Pasien </label>
                <ErrorMessage name="alamat" component="span" />
                <Field name="alamat" id="alamat" className="field-text" />
              </div>
              <div className="field">
                <label>Kode Pos </label>
                <ErrorMessage name="kodepos" component="span" />
                <Field name="kodepos" id="kodepos" className="field-text" />
              </div>
              <div className="field">
                <label>Usia</label>
                <ErrorMessage name="usia" component="span" />
                <Field name="usia" id="usia" className="field-text" />
              </div>
              <div className="field">
                <label>Nomor Telepon</label>
                <ErrorMessage name="telpPasien" component="span" />
                <Field
                  name="telpPasien"
                  id="telpPasien"
                  className="field-text"
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Tujuan Pendaftaran</legend>
              <div className="field">
                <label style={{ marginBottom: "1rem" }}>
                  Silahkan tulis tujuan pendaftaran atau nama dokter, Poliklinik
                  atau Fasilitas yang dituju.
                </label>

                <Field
                  name="fasilitas"
                  id="fasilitas"
                  className="field-text"
                  placeholder="contoh : Fasilitas Rawat Inap"
                  style={{ width: "100%" }}
                />
                <ErrorMessage name="fasilitas" component="span" />
              </div>
              <div className="daftar-btn-container">
                <button type="submit" className="daftar-btn">
                  Daftarkan
                </button>
                <button type="reset" className="daftar-btn">
                  Reset
                </button>
              </div>
            </fieldset>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default PendaftaranDetail;
