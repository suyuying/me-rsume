import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AmazonWebIcon from "./components/amazon-web";
import BlogIcon from "./components/blogicon";
import GitHub from "./components/github";
import Jenkins from "./components/jenkins";
import MyResumePic from "./assets/img/resume/my_resume_pic.png";
import GitHubAction from "./components/githubAction";
import GoogleCloudIcon from "./components/google-cloud";
import Docker from "./components/docker";
import Kubernetes from "./components/kubernetes";
import Terraform from "./components/terraform";
// import GrafanaIcon from "./assets/img/resume/grafana-ar21.svg";
import Promehtues from "./components/prometheus";
import KibanaIcon from "./components/kibana";
// import MicrosoftAzureIcon from "./components/microsoft_azure";
// import NginxIcon from "./components/nginx";
import Pulumicon from "./components/pulumi";
import ZabbixIcon from "./components/zabbix-icon";
import PythonIcon from "./components/python";
import ReactIcon from "./components/reacticon";
// import CloudflareIcon from "./components/cloudflare";
import AnsibleIcon from "./components/Ansible";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log(localStorage.theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}

function Switcher(props) {
  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={props.checked}
        onChange={props.onChange}
        size={34}
      />
    </>
  );
}

function MyResumeSide(props) {
  return (
    <div className="sticky col-span-12 lg:col-span-3 hidden lg:block h-screen  top-44">
      <div className=" w-full  lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] dark:text-white p-6 rounded-[20px]  ">
        <Switcher
          checked={props.checked}
          onChange={props.onChange}
          className="btn bg-black dark:bg-black  z-20"
        />
        <img
          src={MyResumePic}
          alt="MyResumePic"
          width="240"
          height="240"
          decoding="async"
          data-nimg="1"
          className="w-[200px] h-[240px] absolute left-[50%] transform -translate-x-[50%] -translate-y-[10%] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] z-3"
        />

        <div className="flex "></div>
        <div className="pt-[10px] pb-2">
          <h1 className="text-[26px] font-semibold ">Ford Su</h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-cyan-300">
            IT/DevOps
          </h3>
        </div>
        <div className="flex justify-center space-x-4 bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl ">
          <Link
            to="https://suyuying.github.io"
            target="_blank"
            className="btn bg-white dark:bg-black shadow-md p-2 my-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500"
          >
            <BlogIcon />
          </Link>
          <Link
            to="https://github.com/suyuying"
            target="_blank"
            className="btn bg-white dark:bg-black shadow-md px-1 my-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 "
          >
            <GitHub />
          </Link>
        </div>
        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
          <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#E93B81] shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] ">Phone</p>
              <p className="m-0  break-all">
                <Link
                  className="m-0 hover:text-[#FA5252] duration-300 transition"
                  to="tel:+886952657360"
                >
                  +886 952 657 360
                </Link>
              </p>
            </div>
          </div>
          <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#6AB5B9]  shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] ">Location</p>
              <p className="m-0  break-all">Taiwan</p>
            </div>
          </div>
          <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#FD7590] shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] ">Email</p>
              <p className="m-0  break-all"> z0952657360@gmail.com</p>
            </div>
          </div>
          <div className="flex py-2.5 undefined">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#C17CEB] shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] ">Birthday</p>
              <p className="m-0  break-all">August 19, 1993</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyResume() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <section
        className={`${
          colorTheme === "light" ? "bg-img-dark" : "bg-img-light"
        } dark:text-white`}
      >
        <div className="flex bg-contain justify-center pt-20">
          <div className="container grid grid-cols-12 md:gap-x-10   ">
            <MyResumeSide checked={darkSide} onChange={toggleDarkMode} />

            <div className="col-span-12 lg:col-start-4 col-end-14">
              <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                <div>
                  <div className="pt-12 md:pt-12 pb-6 px-2 sm:px-5 md:px-10 lg:px-14">
                    <h2 className="after:left-52 dark:text-white font-medium text-[35px]">
                      About Me
                    </h2>
                    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                      <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                          <p className="text-gray-lite dark:text-color-910 leading-7 dark:text-white">
                            I am a creative and diligent Engineer from Nantou,
                            Taiwan, currently working in DevOps department.
                            Excel in team coordination, have extensive
                            experience as a Python developer, also familiar with
                            Linux shell script, prefer to manage environment
                            through configuration management tool, like Ansible,
                            and Terraform. I enjoy streamlining complex
                            processes and turning them into simple, reliable
                            code.
                          </p>
                          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910 dark:text-white">
                            Be well-versed in setting up and managing AWS and
                            GCP as part of my current job responsibilities. To
                            ensure server stability, i am skilled in using
                            various performance monitoring tools such as Zabbix,
                            Prometheus and ELK. My goal is to bring accuracy,
                            automation, and safety to the server side.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 dark:text-white">
                    <h3 className="text-[35px]  font-medium pb-5 ">
                      What I do!
                    </h3>
                    <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                      <div
                        className=" dark:bg-transparent bg-violet-50 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-3"
                        // style={{ background: "rgb(252, 244, 255)" }}
                      >
                        <GitHubAction className="inline-block  bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <Jenkins className="inline-block  bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />

                        {/* <MicrosoftAzureIcon className="inline-block ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" /> */}
                        <div className="space-y-2 break-all">
                          <h3 className=" text-xl font-semibold ">Pipline</h3>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            1. Utilize Jenkins to do CICD, execute Ansible roles
                            for updating the application in UAT and PROD
                            environment, and maintain the configuration of GCP
                            security groups through terraform{" "}
                          </p>{" "}
                          <p className=" leading-8 text-gray-lite  break-normal">
                            2.Employ GitHub Actions modules for both building
                            and deploying
                            <Link
                              to="https://d14ghvre931txr.cloudfront.net/"
                              className="link"
                              target="_blank"
                            >
                              {" "}
                              my resume website.
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div
                        className="dark:bg-transparent bg-amber-50 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-4"
                        // style={{ background: "rgb(254, 250, 240)" }}
                      >
                        <PythonIcon className="inline-block  bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <ReactIcon className=" inline-block ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />

                        <div className="space-y-2 break-all">
                          <h3 className=" text-xl font-semibold">
                            App Development
                          </h3>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            1. Using Python to automate daily tasks, such as use
                            flask to build custom exporter of prometheus to
                            monitor certificate expiry date , use pandas to deal
                            with raw data and get data i need.
                          </p>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            2.
                            <Link
                              to="https://suyuying.github.io/"
                              className="link"
                              target="_blank"
                            >
                              {" "}
                              Build my api documenation and Blog
                            </Link>{" "}
                            based on docusaurus, and use FastAPI and react to
                            build my own server
                          </p>
                        </div>
                      </div>
                      <div className="dark:bg-transparent bg-orange-100 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-4">
                        <ZabbixIcon className="bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 inline-block" />
                        <KibanaIcon className="ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 inline-block" />
                        <Promehtues className="ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 inline-block" />

                        {/* <GrafanaIcon className="ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" /> */}

                        <div className="space-y-2 break-all">
                          <h3 className=" text-xl font-semibold">Monitor</h3>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            1. Upgrading Zabbix from version 5 to 6, and make
                            ensure this process doesn't' not interrupt service.
                          </p>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            2. Implement a logging system by setting up an ELK
                            (Elasticsearch, Logstash, Kibana) cluster and
                            deploying Filebeat on virtual machines using Ansible
                            roles.
                          </p>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            3. Set up Prometheus servers to gather metrics from
                            Exporters to get data of basic services , TCP and
                            HTTP status of application, and show data in
                            grafana.
                          </p>
                        </div>
                      </div>
                      <div className="about-box dark:bg-transparent bg-fuchsia-50 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-4">
                        <AnsibleIcon className="inline-block bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <Terraform className="inline-block bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <Pulumicon className="inline-block bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />

                        <div className="space-y-2 break-all">
                          <h3 className="text-xl font-semibold">IaC</h3>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            1. Utilize Ansible for version updates and
                            configuration management like vm initialization ,
                            set up filebeat on a large number of machines
                          </p>
                          <p className=" leading-8 text-gray-lite  break-normal">
                            2. Use Terraform and Pulumi to establish cloud
                            environments, implement version control through
                            CI/CD, and leverage jenkinks CICD for gcp secutility
                            groups management to ensure the stability of the
                            environment.
                          </p>
                        </div>
                      </div>
                      <div
                        className="about-box dark:bg-transparent bg-red-100 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-4"
                        // style={{ background: "rgb(255, 244, 244)" }}
                      >
                        <Docker className="inline-block bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <Kubernetes className=" inline-block ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <div className="space-y-2 break-normal">
                          <h3 className=" text-xl font-semibold">Container</h3>
                          <p className=" leading-8 text-gray-lite ">
                            Familiarity with Kubernetes and Docker enables me to
                            assist others in managing container orchestration
                            and providing high availability.
                          </p>
                        </div>
                      </div>
                      <div
                        className="about-box dark:bg-transparent bg-zinc-100 dark:rounded-lg dark:border-[#212425] dark:border-2 dark:p-4"
                        // style={{ background: "rgb(255, 240, 248)" }}
                      >
                        <GoogleCloudIcon className="inline-block bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <AmazonWebIcon className="inline-block ml-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500" />
                        <div className="space-y-2 break-normal">
                          <h3 className="text-xl font-semibold">
                            Cloud System
                          </h3>
                          <p className=" leading-8 text-gray-lite ">
                            Experienced in aws and gcp, from IAM setting, VPC,
                            CDN, bucket ,load balancer and computing resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-span-12  lg:col-start-4 col-end-14 mt-8">
              <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                <div>
                  <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
                    <div className="py-12">
                      <h2 className="after:left-44 font-medium text-[35px]">
                        Resume
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="text-6xl text-[#F95054]">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
                              </svg>
                            </div>
                            <h4 className="text-5xl  font-medium">Education</h4>
                          </div>
                          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 dark:bg-transparent bg-emerald-100">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                              2017-2019
                            </span>
                            <h3 className="text-xl "> Master of Science</h3>
                            <p className="dark:text-[#b7b7b7]">
                              National Taiwan University, Taiwan
                            </p>
                          </div>
                          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 dark:bg-transparent bg-indigo-50">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                              2021
                            </span>
                            <h3 className="text-xl ">
                              {" "}
                              Network Engineer Degree
                            </h3>
                            <p className="dark:text-[#b7b7b7]">
                              Institute for Information Industry
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="text-6xl text-[#F95054]">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                              </svg>
                            </div>
                            <h4 className="text-5xl  font-medium">
                              Experience
                            </h4>
                          </div>

                          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 dark:bg-transparent bg-rose-100">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                              2021 - 2023
                            </span>
                            <h3 className="text-xl "> IT Engineer </h3>
                            <p className="dark:text-[#b7b7b7]">
                              Cloud Miner Ltd.
                            </p>
                          </div>
                          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 dark:bg-transparent bg-orange-100">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                              2023 - present
                            </span>
                            <h3 className="text-xl "> DevOps Engineer </h3>
                            <p className="dark:text-[#b7b7b7]">Trevi Ltd.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container bg-color-810 dark:bg-[#0D0D0D] py-4 px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="col-span-1">
                        <h4 className="text-5xl  font-medium mb-6">
                          Working Skills
                        </h4>
                        <div className=" mb-7">
                          <div className="flex justify-between py-1">
                            <span className=" text-base text-gray-lite font-semibold ">
                              Coding
                            </span>
                            <span className=" text-base font-semibold text-gray-lite pr-5 ">
                              75%
                            </span>
                          </div>
                          <svg
                            className="rc-progress-line"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                          >
                            <path
                              className="rc-progress-line-trail"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#D9D9D9"
                              strokeWidth={1}
                              fillOpacity={0}
                            />
                            <path
                              className="rc-progress-line-path"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#FF6464"
                              strokeWidth={1}
                              fillOpacity={0}
                              style={{
                                strokeDasharray: "75px, 100px",
                                strokeDashoffset: 0,
                                transition:
                                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                              }}
                            />
                          </svg>
                        </div>
                        <div className=" mb-7">
                          <div className="flex justify-between py-1">
                            <span className=" text-base text-gray-lite font-semibold ">
                              Pipline{" "}
                            </span>
                            <span className=" text-base font-semibold text-gray-lite pr-5 ">
                              70%
                            </span>
                          </div>
                          <svg
                            className="rc-progress-line"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                          >
                            <path
                              className="rc-progress-line-trail"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#D9D9D9"
                              strokeWidth={1}
                              fillOpacity={0}
                            />
                            <path
                              className="rc-progress-line-path"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#9272D4"
                              strokeWidth={1}
                              fillOpacity={0}
                              style={{
                                strokeDasharray: "70px, 100px",
                                strokeDashoffset: 0,
                                transition:
                                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                              }}
                            />
                          </svg>
                        </div>
                        <div className=" mb-7">
                          <div className="flex justify-between py-1">
                            <span className=" text-base text-gray-lite font-semibold ">
                              Team Work
                            </span>
                            <span className=" text-base font-semibold text-gray-lite pr-5 ">
                              85%
                            </span>
                          </div>
                          <svg
                            className="rc-progress-line"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                          >
                            <path
                              className="rc-progress-line-trail"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#D9D9D9"
                              strokeWidth={1}
                              fillOpacity={0}
                            />
                            <path
                              className="rc-progress-line-path"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#5185D4"
                              strokeWidth={1}
                              fillOpacity={0}
                              style={{
                                strokeDasharray: "85px, 100px",
                                strokeDashoffset: 0,
                                transition:
                                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                              }}
                            />
                          </svg>
                        </div>
                        <div className=" mb-7">
                          <div className="flex justify-between py-1">
                            <span className=" text-base text-gray-lite font-semibold ">
                              Monitor System
                            </span>
                            <span className=" text-base font-semibold text-gray-lite pr-5 ">
                              75%
                            </span>
                          </div>
                          <svg
                            className="rc-progress-line"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                          >
                            <path
                              className="rc-progress-line-trail"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#D9D9D9"
                              strokeWidth={1}
                              fillOpacity={0}
                            />
                            <path
                              className="rc-progress-line-path"
                              d="M 0.5,0.5
       L 99.5,0.5"
                              strokeLinecap="round"
                              stroke="#CA56F2"
                              strokeWidth={1}
                              fillOpacity={0}
                              style={{
                                strokeDasharray: "74.25px, 100px",
                                strokeDashoffset: 0,
                                transition:
                                  "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                              }}
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <h4 className="text-5xl  font-medium mb-8">
                          Knowledge
                        </h4>
                        <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                          <button className="text-[15px] btn  btn-outline btn-primary ">
                            Terraform
                          </button>
                          <button className="text-[15px] btn  btn-outline btn-primary ">
                            Python
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Kubernetes
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            ELK
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            CI/CD
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            cloud service
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Ansible
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Nginx
                          </button>
                          <button className="btn  btn-outline btn-primary  text-[15px]">
                            Toeic 910
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
                    <div className="container">
                      <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
                        Thanks Reading ,{" "}
                        <Link
                          className="hover:text-[#FA5252] duration-300 transition"
                          to="https://suyuying.github.io./blog"
                          target="_blank"
                        >
                          Here is Link to my Blog
                        </Link>
                        .
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
