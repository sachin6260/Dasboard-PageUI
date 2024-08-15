import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSync, faInfoCircle, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Dashboard.css";
import { faChartLine, faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const iconStyle = { color: '#d3d3d3' };

    const [isPopupActive, setPopupActive] = useState(false);
    const [activeTab, setActiveTab] = useState('cspm');

    const handleAddWidgetClick = () => {
        setPopupActive(true);
    };

    const handleClosePopup = () => {
        setPopupActive(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="top-bar">
                <div className="title-section">
                    <h2>CNAPP Dashboard</h2>
                </div>
                <div className="controls">
                    <button className="add-widget-btn" onClick={handleAddWidgetClick}>
                        <FontAwesomeIcon icon={faPlus} /> Add Widget
                    </button>
                    <button className="control-btn">
                        <FontAwesomeIcon icon={faSync} />
                    </button>
                    <button className="control-btn">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                    <div className="date-range">
                        <button className="date-range-btn">
                            Last 2 days <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="dashboard">
                {/* First Row */}
                <div className="widget">
                    <h3>Cloud Accounts</h3>
                    <div className="chart">
                        <div className="donut-chart">
                            <div className="donut"></div>
                            <div className="donut-center">
                                <div className="center-content">2<br />Total</div>
                            </div>
                        </div>
                        <div className="legend">
                            <div className="legend-item">
                                <span className="legend-color connected"></span> Connected (2)
                            </div>
                            <div className="legend-item">
                                <span className="legend-color not-connected"></span> Not Connected (2)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget">
                    <h3>Cloud Account Risk Assessment</h3>
                    <div className="chart">
                        <div className="donut-chart">
                            <div className="donut assessment"></div>
                            <div className="donut-center">
                                <div className="center-content">9659<br />Total</div>
                            </div>
                        </div>
                        <div className="legend">
                            <div className="legend-item">
                                <span className="legend-color failed"></span> Failed (1589)
                            </div>
                            <div className="legend-item">
                                <span className="legend-color warning"></span> Warning (680)
                            </div>
                            <div className="legend-item">
                                <span className="legend-color not-available"></span> Not Available (36)
                            </div>
                            <div className="legend-item">
                                <span className="legend-color passed"></span> Passed (7254)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="widget add-widget">
                    <button className="add-widget-btn" onClick={handleAddWidgetClick}>+ Add Widget</button>
                </div>
            </div>

            {/* Second Row */}
            <div className="dashboard">
                <div className="widget">
                    <h3>Top 5 Namespace Specific Alerts</h3>
                    <div className="chart">
                        <div className="no-data">
                        <FontAwesomeIcon icon={faChartLine} size="3x" style={iconStyle} />
                        <p>No Graph data available!</p>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <h3>Workload Alerts</h3>
                    <div className="chart">
                        <div className="no-data">
                        <FontAwesomeIcon icon={faChartLine} size="3x" style={iconStyle} />
                            <p>No Graph data available!</p>
                        </div>
                    </div>
                </div>
                <div className="widget add-widget">
                    <button className="add-widget-btn" onClick={handleAddWidgetClick}>+ Add Widget</button>
                </div>
            </div>

            {/* Third Row */}
            <div className="dashboard">
                <div className="widget">
                    <h3>Risk Assessment</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar high" style={{ width: '79%' }}></div>
                        <div className="progress-bar control" style={{ width: '2%' }}></div>
                        <div className="progress-bar remaining" style={{ width: '19%' }}></div>
                    </div>
                    <div className="progress-info">
                        <div className="info-item"><span className="info-label">High:</span> 79%</div>
                        <div className="info-item"><span className="info-label">Control:</span> 2%</div>
                        <div className="info-item"><span className="info-label">Remaining:</span> 19%</div>
                        <div className="info-total">1470 Total</div>
                    </div>
                </div>

                <div className="widget">
                    <h3>Image Security Issue</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar high" style={{ width: '40%' }}></div>
                        <div className="progress-bar control" style={{ width: '32%' }}></div>
                        <div className="progress-bar remaining" style={{ width: '28%' }}></div>
                    </div>
                    <div className="progress-info">
                        <div className="info-item"><span className="info-label">High:</span> 40%</div>
                        <div className="info-item"><span className="info-label">Control:</span> 32%</div>
                        <div className="info-item"><span className="info-label">Remaining:</span> 28%</div>
                        <div className="info-total">2 Total</div>
                    </div>
                </div>

                <div className="widget add-widget">
                    <button className="add-widget-btn" onClick={handleAddWidgetClick}>+ Add Widget</button>
                </div>
            </div>

            {/* Popup for Adding Widget */}
            {isPopupActive && (
                <div className={`popup ${isPopupActive ? 'active' : ''}`} id="addWidgetPopup">
                    <div className="popup-header">
                        <h2>Add Widget</h2>
                        <button className="close-btn" id="closePopup" onClick={handleClosePopup}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    <div className="tab-container">
                        <div className={`tab ${activeTab === 'cspm' ? 'active' : ''}`} onClick={() => handleTabClick('cspm')}>CSPM</div>
                        <div className={`tab ${activeTab === 'cwpp' ? 'active' : ''}`} onClick={() => handleTabClick('cwpp')}>CWPP</div>
                        <div className={`tab ${activeTab === 'image' ? 'active' : ''}`} onClick={() => handleTabClick('image')}>Image</div>
                        <div className={`tab ${activeTab === 'ticket' ? 'active' : ''}`} onClick={() => handleTabClick('ticket')}>Ticket</div>
                    </div>
                    <div className={`popup-body ${activeTab === 'cspm' ? 'active' : ''}`} id="cspm">
                        <div className="checkbox-container">
                            <input type="checkbox" id="cloudAccounts" />
                            <label htmlFor="cloudAccounts">Cloud Accounts</label>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="cloudRiskAssessment" />
                            <label htmlFor="cloudRiskAssessment">Cloud Account Risk Assessment</label>
                        </div>
                    </div>
                    <div className={`popup-body ${activeTab === 'cwpp' ? 'active' : ''}`} id="cwpp">
                        <div className="checkbox-container">
                            <input type="checkbox" id="workloadProtection" />
                            <label htmlFor="workloadProtection">Workload Protection</label>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="containerSecurity" />
                            <label htmlFor="containerSecurity">Container Security</label>
                        </div>
                    </div>
                    <div className={`popup-body ${activeTab === 'image' ? 'active' : ''}`} id="image">
                        <div className="checkbox-container">
                            <input type="checkbox" id="imageScanning" />
                            <label htmlFor="imageScanning">Image Scanning</label>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="vulnerabilityManagement" />
                            <label htmlFor="vulnerabilityManagement">Vulnerability Management</label>
                        </div>
                    </div>
                    <div className={`popup-body ${activeTab === 'ticket' ? 'active' : ''}`} id="ticket">
                        <div className="checkbox-container">
                            <input type="checkbox" id="openTickets" />
                            <label htmlFor="openTickets">Open Tickets</label>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="closedTickets" />
                            <label htmlFor="closedTickets">Closed Tickets</label>
                        </div>
                    </div>
                    <div className="popup-footer">
                        <button className="cancel-btn" id="cancelPopup" onClick={handleClosePopup}>Cancel</button>
                        <button className="confirm-btn">Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
