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
// import Pulumicon from "./components/pulumi";
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
                            Hi, My name is Ford, I independently manage and set
                            up company systems, including CI/CD (Jenkins),
                            logging systems(elastic and loki), machine and
                            application monitoring systems(prometheus), reverse
                            proxies, and more. Throughout the process, I
                            frequently communicate with RD and PM to discuss
                            requirements and achieve goals, which has
                            significantly enhanced my communication skills.
                          </p>
                          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910 dark:text-white">
                            As part of my job responsibilities, I am well-versed
                            in network design and machine provisioning in AWS
                            and GCP. I am proficient in writing scripts using
                            Python or Linux shell scripting or other
                            configuration management tools like Ansible to
                            convert routine, tedious management tasks into clear
                            and concise code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 dark:text-white">
                    <h3 className="text-[35px] font-medium pb-5">What I do!</h3>
                    <div className="space-y-8">
                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold text-gray-500">
                          1.
                        </span>
                        <div>
                          <h4 className="text-xl font-semibold">
                            VM-to-Kubernetes Migration and GitOps Implementation
                          </h4>
                          <p className="text-gray-lite leading-8">
                            a. Work closely with RD teams to confirm whether
                            services were stateless or stateful, and defined a
                            consistent naming convention for Kubernetes
                            services.
                            <br />
                            b. Collected historical log usage data from the
                            company's logging system, and based on Grafana’s
                            official recommendation for log processing
                            (20GB/day), chose the single-binary architecture of
                            Loki as a suitable deployment model.
                            <br />
                            c. Used a GitOps tool (ArgoCD) with Git version
                            control to manage Kubernetes deployments, ensuring
                            all deployment changes are traceable.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold text-gray-500">
                          2.
                        </span>
                        <div>
                          <h4 className="text-xl font-semibold">
                            Enhancing the deployment and rollback strategy and
                            templated the process
                          </h4>
                          <p className="text-gray-lite leading-8">
                            a. To enhance traceability and clarity, we change
                            tag format to combine a timestamp and commit ID.
                            <br />
                            b. Used Python’s Jinja2 templating engine in
                            combination with YAML configuration files to
                            dynamically generate Jenkinsfiles and create
                            corresponding Jenkins jobs, it increase the effiency
                            of building environments.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold text-gray-500">
                          3.
                        </span>
                        <div>
                          <h4 className="text-xl font-semibold">
                            Streamlining Server Provisioning with Ansible
                          </h4>
                          <p className="text-gray-lite leading-8">
                            Due to the inefficiency of manual setup processes, I
                            initiated a project to replace repetitive deployment
                            tasks with Ansible.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold text-gray-500">
                          4.
                        </span>
                        <div>
                          <h4 className="text-xl font-semibold">
                            Use terraform to manage cloud environments
                          </h4>
                          <p className="text-gray-lite leading-8">
                            a. To accelerate the VM provisioning process and
                            ensure all machine changes are properly tracked, I
                            used Terraform to manage VM creation and
                            version-controlled all configurations in Git.
                            <br />
                            b. Used Terraform to manage GCP security groups with
                            many IPs, improving clarity and ease of maintenance.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-xl font-semibold text-gray-500">
                          6.
                        </span>
                        <div>
                          <h4 className="text-xl font-semibold">
                            Implemented Nginx log analysis and visualization:
                          </h4>
                          <p className="text-gray-lite leading-8">
                            a. Utilized Elasticsearch Ingest Pipelines to parse
                            and process Nginx logs for structured data
                            ingestion.
                            <br />
                            b. Integrated Grafana with Lucene queries of
                            Elasticsearch to build visual dashboards, enabling
                            real-time monitoring and trend analysis.
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
                            <h3 className="text-xl ">
                              {" "}
                              Master of Food Science{" "}
                            </h3>
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
                              2021/10 - 2023/06
                            </span>
                            <h3 className="text-xl "> DevOps Engineer </h3>
                            <p className="dark:text-[#b7b7b7]">
                              Cloud Miner Ltd.
                            </p>
                          </div>
                          <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 dark:bg-transparent bg-orange-100">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                              2023/06 - present
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
                            Container
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Elasticsearch
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Prometheus
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Grafana
                          </button>
                          <button className="btn  btn-outline btn-primary   text-[15px] ">
                            Jenkins CI/CD
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
