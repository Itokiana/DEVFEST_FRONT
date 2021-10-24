import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../../utils/AxiosInstance";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  useEffect(() => {
    console.log(email);
    console.log(password);
    console.log(passwordConfirmation);
  });
  const handleSubmit = e => {
    e.preventDefault()
    AxiosInstance.post('/auth', {
      'email': email,
      'password': password,
      'password_confirmation': passwordConfirmation
    })
    .then(response => {
      console.log(response)
    })
  };
  return (
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">S'inscrire</h1>
                </div>
                <form class="user" onSubmit={ handleSubmit }>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email"
                      onChange={ e => setEmail(e.target.value) }
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Mot de passe"
                        onChange={ e => setPassword(e.target.value) }
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Confirmer mot de passe"
                        onChange={ e => setPasswordConfirmation(e.target.value) }
                      />
                    </div>
                  </div>
                  <button
                    class="btn btn-success btn-user btn-block"
                    type="submit"
                  >
                    Valider
                  </button>
                  <hr />
                </form>
                <hr />
                <div class="text-center">
                  <Link class="small" to="/login">
                    déjà un compte? se connecter!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
