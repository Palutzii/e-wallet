import { Link, useLocation } from "react-router-dom";
import {Header} from "./Header.jsx";


export const Dashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
            <aside>
                <Header />
                <nav className="navigation">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={"/home"} className={currentPath === '/home' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="21"
                                     viewBox="0 0 302 281"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M162.006 3L294.006 115C311.006 129 296.006 152 279.006 147L151.006 41L23.0059 147C5.00592 152 -8.99408 129 7.00592 115L42.0059 86V38H79.0059V55L140.006 3C146.006 -1 156.006 -1 162.006 3Z"
                                          fill="currentColor"

                                    />
                                    <path fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M272.006 158V281H186.006V175H115.006V281H30.0059V158L150.006 57L272.006 158Z"
                                          fill="currentColor"
                                    />
                                </svg>
                                <span>Home</span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/newCard"} className={currentPath === '/newCard' ? 'active-nav' : ''}>
                                <svg width="24"
                                     height="24"
                                     viewBox="0 0 82 58"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M66 8C66 5.79086 64.2091 4 62 4H8C5.79086 4 4 5.79086 4 8V38C4 40.2091 5.79086 42 8 42H48.029C48.0097 41.6681 48 41.3346 48 41C48 31.6112 55.6112 24 65 24C65.3346 24 65.6681 24.0097 66 24.029V8ZM65 28C57.8203 28 52 33.8203 52 41C52 42.7718 52.3545 44.4608 52.9963 46H8C3.58172 46 0 42.4183 0 38V8C0 3.58172 3.58172 0 8 0H62C66.4183 0 70 3.58172 70 8V28.9963C68.4608 28.3545 66.7718 28 65 28Z"
                                          fill="currentColor"/>
                                    <path d="M67 34C67 32.8954 66.1046 32 65 32C63.8954 32 63 32.8954 63 34V48C63 49.1046 63.8954 50 65 50C66.1046 50 67 49.1046 67 48V34Z"
                                          fill="currentColor"/>
                                    <path d="M72 43C73.1046 43 74 42.1046 74 41C74 39.8954 73.1046 39 72 39H58C56.8954 39 56 39.8954 56 41C56 42.1046 56.8954 43 58 43H72Z"
                                          fill="currentColor"/>
                                    <path d="M65 54C72.1797 54 78 48.1797 78 41C78 33.8203 72.1797 28 65 28C57.8203 28 52 33.8203 52 41C52 48.1797 57.8203 54 65 54ZM65 58C55.6112 58 48 50.3888 48 41C48 31.6112 55.6112 24 65 24C74.3888 24 82 31.6112 82 41C82 50.3888 74.3888 58 65 58Z"
                                          fill="currentColor"/>
                                    <path d="M2 13C0.89543 13 0 12.1046 0 11C0 9.89543 0.89543 9 2 9H68C69.1046 9 70 9.89543 70 11C70 12.1046 69.1046 13 68 13H2Z"
                                          fill="currentColor"/>
                                    <path d="M2 23C0.89543 23 0 22.1046 0 21C0 19.8954 0.89543 19 2 19H68C69.1046 19 70 19.8954 70 21C70 22.1046 69.1046 23 68 23H2Z"
                                          fill="currentColor"/>
                                    <path d="M11 39C9.89543 39 9 38.1046 9 37C9 35.8954 9.89543 35 11 35H21C22.1046 35 23 35.8954 23 37C23 38.1046 22.1046 39 21 39H11Z"
                                          fill="currentColor"/>
                                    <path d="M29 39C27.8954 39 27 38.1046 27 37C27 35.8954 27.8954 35 29 35H39C40.1046 35 41 35.8954 41 37C41 38.1046 40.1046 39 39 39H29Z"
                                          fill="currentColor"/>
                                </svg>
                                <span>New Card</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/transactions"} className={currentPath === '/transaction' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="21"
                                     viewBox="0 0 88 99"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M85.8 25C85.8 22.3 83.6 20.1 80.9 20.1H16.9L27.5999 9.19999C29.4999 7.29999 29.4999 4.19999 27.5999 2.19999C26.5999 1.19999 25.4 0.799988 24.1 0.799988C22.8 0.799988 21.6 1.29999 20.6 2.19999L1.49995 21.5C-0.400049 23.4 -0.400049 26.5 1.49995 28.4L20.7 47.8C21.6 48.7 22.9 49.3 24.2 49.3C25.5 49.3 26.7 48.8 27.7 47.9C28.6 47 29.2 45.7 29.2 44.4C29.2 43.1 28.6999 41.8 27.7999 40.9L16.7 29.9H80.8C83.6 29.9 85.8 27.7 85.8 25Z"
                                          fill="currentColor"
                                    />
                                    <path d="M63.1 98.9C64.4 98.9 65.7 98.4 66.6 97.4L85.8 78C87.7 76.1 87.7 73 85.8 71.1L66.6 51.9C64.7 50 61.6 50 59.6 51.9C57.7 53.8 57.7 56.9 59.6 58.9L70.4 69.7H6.4C3.7 69.7 1.5 71.9 1.5 74.6C1.5 77.3 3.7 79.5 6.4 79.5H70.5L59.6 90.5C58.7 91.4 58.2 92.7 58.2 94C58.2 95.3 58.7 96.5 59.7 97.5C60.6 98.4 61.8 98.9 63.1 98.9Z"
                                          fill="currentColor"
                                    />
                                </svg>
                                <span>Transactions</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/statistics"} className={currentPath === '/statistics' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="21"
                                     viewBox="0 0 76 74"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.07 35.19L37.13 55.69C37.5892 56.3588 38.2042 56.9058 38.922 57.2839C39.6397 57.6619 40.4387 57.8597 41.25 57.86H41.33C42.1556 57.8459 42.9649 57.6276 43.6856 57.2245C44.4062 56.8214 45.0159 56.2461 45.46 55.55L74.92 9.37C75.2974 8.81664 75.5597 8.19309 75.6915 7.53638C75.8232 6.87967 75.8217 6.20318 75.687 5.54707C75.5522 4.89097 75.2871 4.26862 74.9072 3.71697C74.5273 3.16533 74.0404 2.69564 73.4755 2.33578C72.9106 1.97592 72.2791 1.73323 71.6186 1.62212C70.9581 1.51102 70.282 1.53375 69.6304 1.68898C68.9789 1.8442 68.3651 2.12876 67.8257 2.52575C67.2862 2.92275 66.832 3.42408 66.49 4L41.1 43.8L27.17 23.5C26.7072 22.8223 26.0847 22.269 25.3575 21.8888C24.6302 21.5086 23.8206 21.3133 23 21.32C22.187 21.3226 21.3868 21.5233 20.6689 21.905C19.951 22.2866 19.3369 22.8375 18.88 23.51L10 36.62V5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 68.08C0 69.4061 0.526784 70.6779 1.46447 71.6155C2.40215 72.5532 3.67392 73.08 5 73.08H69.58C70.9061 73.08 72.1779 72.5532 73.1155 71.6155C74.0532 70.6779 74.58 69.4061 74.58 68.08C74.58 66.7539 74.0532 65.4821 73.1155 64.5445C72.1779 63.6068 70.9061 63.08 69.58 63.08H10V54.4L23.07 35.19Z"
                                          fill="currentColor"/>
                                </svg>
                                <span>Statistics</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/notifications'} className={currentPath === '/notifications' ? 'active-nav' : '' }>
                                <svg width="22"
                                     height="22"
                                     viewBox="0 0 22 26"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M16.5832 20.169H5.27318H2.10718C3.52618 18.18 4.55018 16.711 4.77118 16.369C4.85618 16.238 4.96118 16.06 5.05318 15.826C5.07518 15.771 5.14118 15.599 5.19418 15.361C5.23818 15.162 5.28318 14.877 5.27318 14.527V9.363C5.27318 6.583 7.52718 4.33 10.3082 4.33H11.5492C14.3292 4.33 16.5832 6.583 16.5832 9.363V14.527C16.5732 14.877 16.6172 15.162 16.6622 15.361C16.7152 15.599 16.7812 15.771 16.8032 15.826C16.8952 16.06 17.0002 16.238 17.0852 16.369C17.3062 16.711 18.3292 18.18 19.7492 20.169H16.5832ZM10.9352 23.381C9.97918 23.381 9.17718 22.746 8.90518 21.878H12.9642C12.6912 22.746 11.8902 23.381 10.9352 23.381ZM10.9352 1.7C11.6442 1.7 12.2522 2.123 12.5312 2.728C11.9022 2.597 10.7402 2.438 9.33718 2.729C9.61618 2.123 10.2262 1.7 10.9352 1.7ZM21.6442 19.908L18.5392 15.461C18.3942 15.252 18.3152 15.008 18.3152 14.758V9.013C18.2732 8.374 18.0482 6.132 16.2412 4.504C15.5932 3.919 14.9182 3.575 14.3872 3.368C14.3362 1.501 12.8132 0 10.9352 0C9.05518 0 7.53318 1.501 7.48218 3.368C6.93018 3.596 6.17518 3.995 5.46218 4.697C3.81918 6.316 3.59718 8.368 3.55318 9.013V14.758C3.55318 15.008 3.47618 15.252 3.33018 15.461L0.225182 19.908C-0.362818 20.751 0.269182 21.878 1.32918 21.878H7.16218C7.46518 23.694 9.03218 25.081 10.9352 25.081C12.8362 25.081 14.4032 23.694 14.7072 21.878H20.5392C21.6002 21.878 22.2322 20.751 21.6442 19.908Z"
                                          fill="currentColor"/>
                                </svg>
                                <span>Notifications</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={'/contact-support'} className={currentPath === '/contact-support' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="21"
                                     viewBox="0 0 14 14"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.1719 0.328094H2.82813C2.1653 0.328783 1.52981 0.592396 1.06112 1.06109C0.592427 1.52978 0.328813 2.16526 0.328125 2.82809V11.1719C0.328813 11.8347 0.592427 12.4702 1.06112 12.9389C1.52981 13.4076 2.1653 13.6712 2.82813 13.6719H11.1719C11.8348 13.6712 12.4702 13.4076 12.9389 12.9389C13.4076 12.4702 13.6712 11.8347 13.6719 11.1719V2.82809C13.6712 2.16526 13.4076 1.52978 12.9389 1.06109C12.4702 0.592396 11.8348 0.328783 11.1719 0.328094ZM12.6719 11.1719C12.6715 11.5696 12.5133 11.9509 12.2321 12.2321C11.9509 12.5133 11.5696 12.6714 11.1719 12.6719H2.82813C2.43044 12.6714 2.04917 12.5133 1.76796 12.2321C1.48675 11.9509 1.32858 11.5696 1.32813 11.1719V2.82809C1.32858 2.43041 1.48675 2.04914 1.76796 1.76793C2.04917 1.48672 2.43044 1.32854 2.82813 1.32809H11.1719C11.5696 1.32854 11.9509 1.48672 12.2321 1.76793C12.5133 2.04914 12.6715 2.43041 12.6719 2.82809V11.1719ZM7.50002 3.96669C7.50002 4.06559 7.4707 4.16225 7.41576 4.24448C7.36082 4.3267 7.28273 4.39079 7.19137 4.42863C7.1 4.46648 6.99947 4.47638 6.90248 4.45709C6.80549 4.43779 6.7164 4.39017 6.64647 4.32025C6.57654 4.25032 6.52892 4.16123 6.50963 4.06424C6.49034 3.96725 6.50024 3.86672 6.53808 3.77535C6.57593 3.68399 6.64001 3.6059 6.72224 3.55096C6.80446 3.49602 6.90113 3.46669 7.00002 3.46669C7.13263 3.46669 7.25981 3.51937 7.35358 3.61314C7.44735 3.70691 7.50002 3.83409 7.50002 3.96669ZM7.50002 5.52789V10.0333C7.50002 10.1659 7.44735 10.2931 7.35358 10.3868C7.25981 10.4806 7.13263 10.5333 7.00002 10.5333C6.86742 10.5333 6.74024 10.4806 6.64647 10.3868C6.5527 10.2931 6.50002 10.1659 6.50002 10.0333V6.02789C6.36742 6.02789 6.24024 5.97522 6.14647 5.88145C6.0527 5.78768 6.00002 5.6605 6.00002 5.52789C6.00002 5.39529 6.0527 5.26811 6.14647 5.17434C6.24024 5.08057 6.36742 5.02789 6.50002 5.02789H7.00002C7.13263 5.02789 7.25981 5.08057 7.35358 5.17434C7.44735 5.26811 7.50002 5.39529 7.50002 5.52789Z"
                                          fill="currentColor"
                                    />
                                </svg>
                                <span>Contact Support</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/settings'} className={currentPath === '/settings' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="21"
                                     viewBox="0 0 96 96"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M92.8 38.8L82.2 37C81.6 35.1 80.8 33.3 79.9 31.5L86.1 22.8C87 21.5 86.9 19.7 85.8 18.6L77.3 10.1C76.2 9 74.4 8.8 73.1 9.8L64.4 16C62.7 15.1 60.8 14.3 58.9 13.7L57.2 3.2C56.9 1.6 55.6 0.5 54 0.5H42C40.4 0.5 39.1 1.6 38.8 3.2L37 13.8C35.1 14.4 33.3 15.2 31.5 16.1L22.8 9.9C21.5 9 19.7 9.1 18.6 10.2L10.1 18.7C9 19.8 8.8 21.6 9.8 22.9L16 31.6C15.1 33.3 14.3 35.2 13.7 37.1L3.2 38.8C1.6 39.1 0.5 40.4 0.5 42V54C0.5 55.6 1.6 56.9 3.2 57.2L13.8 59C14.4 60.9 15.2 62.7 16.1 64.5L9.9 73.2C9 74.5 9.1 76.3 10.2 77.4L18.7 85.9C19.8 87 21.6 87.2 22.9 86.2L31.6 80C33.3 80.9 35.2 81.7 37.1 82.3L38.9 92.9C39.2 94.5 40.5 95.6 42.1 95.6H54.1C55.7 95.6 57 94.5 57.3 92.9L59 82.2C60.9 81.6 62.7 80.8 64.5 79.9L73.2 86.1C74.5 87 76.3 86.9 77.4 85.8L85.9 77.3C87 76.2 87.2 74.4 86.2 73.1L80 64.4C80.9 62.7 81.7 60.8 82.3 58.9L92.9 57.1C94.5 56.8 95.6 55.5 95.6 53.9V42C95.5 40.4 94.4 39.1 92.8 38.8ZM48 65.1C38.5 65.1 30.9 57.4 30.9 48C30.9 38.5 38.6 30.9 48 30.9C57.4 30.9 65.1 38.5 65.1 48C65.1 57.5 57.5 65.1 48 65.1Z"
                                          fill="currentColor"
                                    />
                                </svg>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/logout'} className={currentPath === '/logout' ? 'active-nav' : ''}>
                                <svg width="21"
                                     height="18"
                                     viewBox="0 0 76 68"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.08 67.5H35.88C37.1932 67.5 38.4935 67.2413 39.7068 66.7388C40.92 66.2362 42.0224 65.4997 42.951 64.5711C43.8796 63.6425 44.6162 62.5401 45.1188 61.3268C45.6213 60.1136 45.88 58.8132 45.88 57.5V48.5C45.88 47.4391 45.4585 46.4217 44.7084 45.6716C43.9582 44.9214 42.9408 44.5 41.88 44.5C40.8191 44.5 39.8017 44.9214 39.0515 45.6716C38.3014 46.4217 37.88 47.4391 37.88 48.5V57.5C37.88 58.0304 37.6692 58.5391 37.2942 58.9142C36.9191 59.2893 36.4104 59.5 35.88 59.5H10.08C9.54952 59.5 9.04082 59.2893 8.66574 58.9142C8.29067 58.5391 8.07996 58.0304 8.07996 57.5V10.5C8.07996 9.96957 8.29067 9.46086 8.66574 9.08579C9.04082 8.71071 9.54952 8.5 10.08 8.5H35.88C36.4104 8.5 36.9191 8.71071 37.2942 9.08579C37.6692 9.46086 37.88 9.96957 37.88 10.5V20.5C37.88 21.5609 38.3014 22.5783 39.0515 23.3284C39.8017 24.0786 40.8191 24.5 41.88 24.5C42.9408 24.5 43.9582 24.0786 44.7084 23.3284C45.4585 22.5783 45.88 21.5609 45.88 20.5V10.5C45.88 9.18678 45.6213 7.88642 45.1188 6.67317C44.6162 5.45991 43.8796 4.35752 42.951 3.42893C42.0224 2.50035 40.92 1.76375 39.7068 1.2612C38.4935 0.758657 37.1932 0.5 35.88 0.5H10.08C7.42779 0.5 4.88425 1.55357 3.00889 3.42893C1.13352 5.3043 0.0799561 7.84784 0.0799561 10.5V57.5C0.0799561 60.1522 1.13352 62.6957 3.00889 64.5711C4.88425 66.4464 7.42779 67.5 10.08 67.5Z"
                                          fill="currentColor"/>
                                    <path d="M58.39 15.55C57.6341 14.8048 56.6132 14.3903 55.5517 14.3978C54.4903 14.4053 53.4753 14.8342 52.73 15.59C51.9848 16.3459 51.5703 17.3669 51.5778 18.4283C51.5853 19.4898 52.0141 20.5048 52.77 21.25L62.15 30.5H23.39C22.3291 30.5 21.3117 30.9215 20.5616 31.6716C19.8114 32.4217 19.39 33.4392 19.39 34.5C19.39 35.5609 19.8114 36.5783 20.5616 37.3285C21.3117 38.0786 22.3291 38.5 23.39 38.5H62.16L52.78 47.75C52.0241 48.4953 51.5953 49.5103 51.5878 50.5717C51.5803 51.6332 51.9948 52.6542 52.74 53.41C53.4853 54.1659 54.5003 54.5948 55.5617 54.6023C56.6232 54.6098 57.6441 54.1953 58.4 53.45L74.73 37.35C75.108 36.9778 75.4081 36.5342 75.613 36.0449C75.8178 35.5556 75.9233 35.0305 75.9233 34.5C75.9233 33.9696 75.8178 33.4444 75.613 32.9552C75.4081 32.4659 75.108 32.0222 74.73 31.65L58.39 15.55Z"
                                          fill="currentColor"/>
                                </svg>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
    )
}