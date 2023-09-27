export const AccountInfo = ({ balance, transactions, summary }) => {
    return (
            <div className="account-info-block">
                <div className="account-info-elm">
                    <div className="account-info">
                        <h4 className="info-title">Balance</h4>
                        <span>{balance}</span>
                    </div>
                    <div className="info-image">
                        <svg width="50"
                             height="50"
                             viewBox="0 0 88 69"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M86 32.5H2C1.46957 32.5 0.960859 32.7107 0.585786 33.0858C0.210714 33.4609 0 33.9696 0 34.5C0 35.0304 0.210714 35.5391 0.585786 35.9142C0.960859 36.2893 1.46957 36.5 2 36.5H86C86.5304 36.5 87.0391 36.2893 87.4142 35.9142C87.7893 35.5391 88 35.0304 88 34.5C88 33.9696 87.7893 33.4609 87.4142 33.0858C87.0391 32.7107 86.5304 32.5 86 32.5Z"
                                  fill="white"
                            />
                            <path d="M45.6367 45.3516C45.4422 45.1033 45.1938 44.9026 44.9102 44.7645C44.6267 44.6264 44.3154 44.5547 44 44.5547C43.6846 44.5547 43.3734 44.6264 43.0898 44.7645C42.8063 44.9026 42.5578 45.1033 42.3633 45.3516L28.3633 65.3516C28.1534 65.6512 28.0296 66.0027 28.0056 66.3678C27.9815 66.7329 28.058 67.0976 28.2267 67.4222C28.3955 67.7468 28.6501 68.019 28.9627 68.209C29.2754 68.399 29.6342 68.4997 30 68.5H58C58.3659 68.4997 58.7247 68.399 59.0374 68.209C59.35 68.019 59.6046 67.7468 59.7733 67.4222C59.9421 67.0976 60.0186 66.7329 59.9945 66.3678C59.9704 66.0027 59.8467 65.6512 59.6367 65.3516L45.6367 45.3516Z"
                                  fill="white"
                            />
                            <path d="M30 0.5H10C8.89543 0.5 8 1.39543 8 2.5V22.5C8 23.6046 8.89543 24.5 10 24.5H30C31.1046 24.5 32 23.6046 32 22.5V2.5C32 1.39543 31.1046 0.5 30 0.5Z"
                                  fill="white"
                            />
                            <path d="M78 0.5H58C56.8954 0.5 56 1.39543 56 2.5V22.5C56 23.6046 56.8954 24.5 58 24.5H78C79.1046 24.5 80 23.6046 80 22.5V2.5C80 1.39543 79.1046 0.5 78 0.5Z"
                                  fill="white"
                            />
                        </svg>

                    </div>
                </div>
                <div className="account-info-elm">
                    <div className="account-info">
                        <h4 className="info-title">Recent Transactions</h4>
                        <span>{transactions}</span>
                    </div>
                    <div className="info-image">
                        <svg width="50"
                             height="50"
                             viewBox="0 0 88 99"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M85.8 25C85.8 22.3 83.6 20.1 80.9 20.1H16.9L27.5999 9.19999C29.4999 7.29999 29.4999 4.19999 27.5999 2.19999C26.5999 1.19999 25.4 0.799988 24.1 0.799988C22.8 0.799988 21.6 1.29999 20.6 2.19999L1.49995 21.5C-0.400049 23.4 -0.400049 26.5 1.49995 28.4L20.7 47.8C21.6 48.7 22.9 49.3 24.2 49.3C25.5 49.3 26.7 48.8 27.7 47.9C28.6 47 29.2 45.7 29.2 44.4C29.2 43.1 28.6999 41.8 27.7999 40.9L16.7 29.9H80.8C83.6 29.9 85.8 27.7 85.8 25Z"
                                  fill="white"
                            />
                            <path d="M63.1 98.9C64.4 98.9 65.7 98.4 66.6 97.4L85.8 78C87.7 76.1 87.7 73 85.8 71.1L66.6 51.9C64.7 50 61.6 50 59.6 51.9C57.7 53.8 57.7 56.9 59.6 58.9L70.4 69.7H6.4C3.7 69.7 1.5 71.9 1.5 74.6C1.5 77.3 3.7 79.5 6.4 79.5H70.5L59.6 90.5C58.7 91.4 58.2 92.7 58.2 94C58.2 95.3 58.7 96.5 59.7 97.5C60.6 98.4 61.8 98.9 63.1 98.9Z"
                                  fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="account-info-elm">
                    <div className="account-info">
                        <h4 className="info-title">Spending Summary</h4>
                        <span>{summary}</span>
                    </div>
                    <div className="info-image">
                        <svg width="50"
                             height="50"
                             viewBox="0 0 50 50"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M31.5 0.900024H5.3C2.6 0.900024 0.5 3.10002 0.5 5.70002V44.3C0.5 47 2.7 49.1 5.3 49.1H31.6C34.3 49.1 36.4 46.9 36.4 44.3V5.70002C36.4 3.00002 34.2 0.900024 31.5 0.900024ZM18.9 11.4C18.4 11.4 17.9 11.4 17.4 11.4C13.9 11.4 10.4 11.4 7 11.4C5.1 11.4 5.1 8.40002 7 8.40002C7.5 8.40002 8 8.40002 8.5 8.40002C12 8.40002 15.5 8.40002 18.9 8.40002C20.8 8.40002 20.8 11.4 18.9 11.4ZM19.1 36C19 35.7 18.7 35.6 18.5 35.6C18.2 35.6 17.9 35.5 17.5 35.5C16.9 35.3 16.2 35 15.8 34.5C15.8 34.5 15.8 34.5 15.7 34.4C15.1 33.7 14.7 32.8 14.7 31.8C14.7 30.8 15.1 30 15.7 29.3C16 28.9 16.5 28.6 16.9 28.4L17 27.8C17.2 27.3 17.8 26.9 18.4 26.9C19.2 26.9 19.9 27.6 19.9 28.4C20.3 28.6 20.7 28.8 21 29.1C21.6 29.7 21.5 30.7 21 31.2C20.7 31.5 20.3 31.6 19.9 31.6C19.5 31.6 19.2 31.5 18.9 31.2C18.6 31 18.3 30.9 18 31.1C17.8 31.2 17.7 31.5 17.7 31.8C17.7 32.1 17.9 32.3 18.1 32.4C18.4 32.5 18.7 32.5 18.9 32.5C19.2 32.5 19.5 32.6 19.7 32.7C20.2 32.9 20.7 33.2 21.1 33.6C21.7 34.3 22.1 35.2 22.1 36.2C22.1 37.2 21.7 38.1 21 38.8C20.7 39.2 20.3 39.4 19.8 39.6C19.8 39.6 19.7 40.1 19.7 40.2C19.5 40.7 18.9 41.1 18.4 41.1C17.8 41.1 17.1 40.8 17 40.2C16.9 40 16.9 39.8 16.9 39.6C16.5 39.4 16.1 39.2 15.8 38.9C15.2 38.3 15.3 37.4 15.8 36.8C16.4 36.2 17.4 36.3 17.9 36.8C18.2 37 18.6 37.1 18.9 36.8C19.1 36.7 19.2 36.3 19.1 36ZM21 22.5C16.3 22.5 11.7 22.5 7 22.5C5.1 22.5 5.1 19.5 7 19.5C7.7 19.5 8.3 19.5 9 19.5C13.7 19.5 18.3 19.5 23 19.5C24.9 19.5 24.9 22.5 23 22.5C22.3 22.5 21.6 22.5 21 22.5ZM30.3 16.9C29.3 16.9 28.4 16.9 27.4 16.9C20.6 16.9 13.8 16.9 7 16.9C5.1 16.9 5.1 13.9 7 13.9C8 13.9 8.9 13.9 9.9 13.9C16.7 13.9 23.5 13.9 30.3 13.9C32.3 13.9 32.3 16.9 30.3 16.9Z"
                                  fill="white"
                            />
                            <path d="M46.6 16.6H49.6C49.6 15.5 49.6 14.4 49.6 13.4C49.6 12.6 48.9 11.9 48.1 11.9C45.9 11.9 43.7 11.9 41.5 11.9C41.2 11.9 40.9 11.9 40.6 11.9C39.8 11.9 39.1 12.6 39.1 13.4C39.1 14.5 39.1 15.6 39.1 16.6H42.1H46.6Z" fill="white"/>
                            <path d="M41.5 39.5C41.7 39.5 41.9 39.5 42.1 39.5C43.6 39.5 45.1 39.5 46.6 39.5C47.1 39.5 47.6 39.5 48.1 39.5H49.7C49.7 38.9 49.6 38.2 49.6 37.7C49.6 31.7 49.6 25.7 49.6 19.7H48.1H40.6H39.1C39.1 22.3 39.1 24.9 39.1 27.5C39.1 30.6 39.1 33.7 39.1 36.8C39.1 37.7 39.1 38.6 39.1 39.5H40.6C40.9 39.5 41.2 39.5 41.5 39.5Z"
                                  fill="white"
                            />
                            <path d="M48.1 42.5C47.8 42.5 47.5 42.5 47.2 42.5C46.7 42.5 46.1 42.5 45.6 42.5C44.8 42.5 44.1 42.5 43.3 42.5C43.3 42.5 43.3 42.5 43.2 42.5C42.3 42.5 41.5 42.5 40.6 42.5H39.7H39.6C40 43.3 40.6 44.1 41 44.9C41.7 46.1 42.3 47.2 43 48.4C43.5 49.4 45 49.4 45.6 48.4C46.7 46.4 47.9 44.5 48.9 42.5H48.1Z"
                                  fill="white"
                            />
                        </svg>

                    </div>
                </div>
            </div>
    )
}