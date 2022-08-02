
import styles from './Container.module.scss'
import { useRef, useEffect, ReactNode} from "react";

interface Iprops {
    children: ReactNode
}
const Container: React.FC<Iprops> = ({children}) => {
    const refBox = useRef<HTMLDivElement>(null)
    const refRight = useRef<HTMLDivElement>(null) 

    useEffect(() => {
    const box = refBox.current
    const styles = window.getComputedStyle(box!);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    // if(box !== null){
    //     box.style.left = "50px";
    // }

    // Right resize
    const onMouseMoveRightResize = (event: MouseEvent) => {
      const dx = event.clientX - x
      x = event.clientX
      width = width + dx

      box!.style.width = `${width}px`
       
    };

    const onMouseUpRightResize = (event: MouseEvent) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event: MouseEvent) => {
      x = event.clientX;
      box!.style.left = styles.left;
    //   box?.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };
    const resizerRight = refRight.current;
    resizerRight?.addEventListener("mousedown", onMouseDownRightResize);

    return () => {
      resizerRight?.removeEventListener("mousedown", onMouseDownRightResize);
    }

    },[])

  return (
    <div className={styles.container}>
      <div ref={refBox} className={styles.resizeable}>
        {children}
        <div ref={refRight} className={`${styles.resizer} ${styles.resizer_r}`}></div>
      </div>
    </div>
  );
}

export default Container;