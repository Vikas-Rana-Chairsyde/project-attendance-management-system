
import { ReactNode } from 'react';
import Styles from "../signin/style/index.module.scss";
import Image from 'next/image';
import { TEXT } from "@/app/pages/signin/constants/constant";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/loader';
import './style/toast.scss';

interface Layout1Props {
  children: ReactNode;
}

export default function Layout1({ children }: Layout1Props) {
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.leftSide}>
                <div className={Styles.background}>
                    <Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-01.png" alt="background" width={2000}
                        height={600} className={Styles.spiral}>
                    </Image>
                    <div className={Styles.paragraphPart}>
                        <h1>{TEXT.bigHeading}</h1>
                        <div><Image src='https://smarthr.co.in/demo/html/template/assets/img/bg/bg-03.png'
                            alt="circle-image" width={2000}
                            height={600} className={Styles.circle}></Image>
                        </div>
                        <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/authentication-bg-01.png"
                            alt="background-image" width={2000}
                            height={600} className={Styles.people}></Image>
                        </div>
                        <p className={Styles.whiteText}>{TEXT.imagetext}</p>
                    </div>
                    <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-02.png"
                            alt="circle-image2" width={2000}
                            height={600} className={Styles.circle_2}></Image>
                        </div>
                </div>
            </div>
      
      {children}
      <ToastContainer toastClassName="flashMessage"
       position="top-right"
       hideProgressBar={true}
       closeOnClick
       pauseOnHover
       autoClose={3000}
       newestOnTop/>
    </div>
  );
}

