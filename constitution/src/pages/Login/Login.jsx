import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AxiosInstance from "../../utils/AxiosInstance";

const Login = () => {
  let history = useHistory();
  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  useEffect(() => {
    console.log(email)
  })
  const handleSubmit = e => {
    e.preventDefault()
    AxiosInstance.post('/auth_constitution/sign_in', {
      'email': email,
      'password': password
    })
    .then(response => {
      localStorage.setItem('user', JSON.stringify({headers: response.headers, data: response.data.data}))
      history.push("/")
      console.log(response)
    })
  }
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Se Connecter</h1>
                    </div>
                    <form class="user" onSubmit={ handleSubmit }>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email..."
                          onChange={ e => setEmail(e.target.value) }
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Mot de passe"
                          onChange={ e => setPassword(e.target.value) }
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Se souvenir de moi
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-success btn-user btn-block"
                      >
                        Valider
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Mot de passe oublier
                      </a>
                    </div>
                    <div class="text-center">
                      <Link class="small" to="/register">
                        S'inscrire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
