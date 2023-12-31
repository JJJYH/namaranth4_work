import { useState } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Sidebar = () =>{
    const history = useHistory();

    const logout = () => {
            alert('로그아웃 성공');
            localStorage.removeItem("token");
            localStorage.removeItem("key");
            history.push('/login');
    }

    return (
        <div className="setFont">
            <nav className="pcoded-navbar" style={{height:"1250px"}}>
                <div className="navbar-wrapper">
                    <div className="navbar-content scroll-div " >
                        <div className="">
                            <div className="main-menu-header" >
                                <img className="img-radius" id="userprofile" src="" alt="User-Profile-Image" />
                                <div className="user-details">
                                    <span id="username"></span>
                                    <div id="more-details"><i className="fa fa-chevron-down m-l-5"></i></div>
                                </div>
                            </div>
                            
                            <div className="collapse" id="nav-user-link">
                                <ul className="list-unstyled">
                                    <li className="list-group-item"><Link to="user-profile.html"><i className="feather icon-user m-r-5"></i>마이페이지</Link></li>
                                    <li className="list-group-item"><Link to="#!"><i className="feather icon-settings m-r-5"></i>회원정보수정</Link></li>
                                </ul>
                            </div>
                        </div>

                        <ul className="nav pcoded-inner-navbar " >
                            <li className="nav-item pcoded-menu-caption">
                                <label>Main</label>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">메인페이지</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notice/list" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">공지사항</span></Link>
                            </li>
                            <li className="nav-item pl-1">
                                <button id="logoutBtn" onClick={logout}><span className="pcoded-micon"><i className="feather icon-log-out mr-2"></i></span>로그아웃</button>
                            </li>
                            <li className="nav-item pcoded-menu-caption">
                                <label>E-mail</label>
                            </li>
                            <li className="nav-item">
                                <Link to="/email/register" className="nav-link "><span className="pcoded-micon"><i className="bi bi-pencil-square" style={{color:"white"}}></i></span><span className="pcoded-mtext">쪽지작성</span></Link>
                            </li>
                            <li className="nav-item pcoded-hasmenu">
                                <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="bi bi-envelope" style={{color:"white"}}></i></span><span className="pcoded-mtext">쪽지함</span></a>
                                
                                <ul className="pcoded-submenu" style={{display:"block"}}>
                                    
                                    <li><Link to="/email/all">전체쪽지함</Link></li>
                                    <li><Link to="/email/receive">수신쪽지함</Link></li>
                                    <li><Link to="/email/send">발신쪽지함</Link></li>
                                    <li><Link to="/email/ts">임시보관함</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/email/del" className="nav-link "><span className="pcoded-micon"><i className="bi bi-trash2" style={{color:"white"}}></i></span><span className="pcoded-mtext">휴지통</span></Link>
                            </li>
                            <li className="nav-item pcoded-menu-caption">
                                <label>Schedule</label>
                            </li>
                            <li className="nav-item">
                                <Link to="/calendar" className="nav-link "><span className="pcoded-micon"><i className="bi bi-calendar3" style={{color:"white"}}></i></span><span className="pcoded-mtext">캘린더</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="bi bi-gear-fill" style={{color:"white"}}></i></span><span className="pcoded-mtext">환경설정</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="bi bi-trash2" style={{color:"white"}}></i></span><span className="pcoded-mtext">휴지통</span></Link>
                            </li>
                            <li className="nav-item pcoded-menu-caption">
                                <label>Approval</label>
                            </li>
                            <li className="nav-item">
                                <Link to="/app" className="nav-link "><span className="pcoded-micon"><i className="bi bi-clipboard-data" style={{color:"white"}}></i></span><span className="pcoded-mtext">기안문서함</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/document/docappReq" className="nav-link "><span className="pcoded-micon"><i className="bi bi-clipboard-minus" style={{color:"white"}}></i></span><span className="pcoded-mtext">결재요청함</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/document/docappRej" className="nav-link "><span className="pcoded-micon"><i className="bi bi-clipboard-x" style={{color:"white"}}></i></span><span className="pcoded-mtext">반려문서함</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/document/docappComp" className="nav-link "><span className="pcoded-micon"><i className="bi bi-clipboard-check" style={{color:"white"}}></i></span><span className="pcoded-mtext">결재완료문서함</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/document/docRefBoard" className="nav-link "><span className="pcoded-micon"><i className="bi bi-file-earmark-medical" style={{color:"white"}}></i></span><span className="pcoded-mtext">참조문서함</span></Link>
                            </li>
                            <li className="nav-item pcoded-hasmenu">
                                <Link to="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-lock"></i></span><span className="pcoded-mtext">Authentication</span></Link>
                                <ul className="pcoded-submenu">
                                    <li><Link to="auth-signup.html" target="_blank">Sign up</Link></li>
                                    <li><Link to="auth-signin.html" target="_blank">Sign in</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Sidebar;