
import styles from './Container.module.scss'
import { useRef, useEffect, ReactNode} from "react"

//Props for children nodes - list of tasks
interface Iprops {
    children: ReactNode
}

const Container: React.FC<Iprops> = ({children}) => {
    const refBox = useRef<HTMLDivElement>(null) // Get ref of container div
    const refRight = useRef<HTMLDivElement>(null) // Get ref of resizer element

    useEffect(() => {
     // Use useEffect() hook to run functions as soon as component mounts and remove event listeners when component unmounts.
      
    const box = refBox.current // Get div element from Ref, using Ref.current
    const styles = window.getComputedStyle(box!) // Get the width and height of container div with getComputedStyle()
    let width = parseInt(styles.width, 10); // compute width
    let x = 0; // init x with 0

    // Right resize fucntion takes in event parametr
    const onMouseMoveRightResize = (event: MouseEvent) => {
      const dx = event.clientX - x
      x = event.clientX
      width = width + dx

      box!.style.width = `${width}px`
       
    };

    // Removing event listener on mousemove
    const onMouseUpRightResize = (event: MouseEvent) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    // Getting X position of mouse with clientX, and updating styles of container box
    const onMouseDownRightResize = (event: MouseEvent) => {
      x = event.clientX;
      box!.style.left = styles.left;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Getting the resizer element from ref
    const resizerRight = refRight.current;

    // Adding event to resizer
    resizerRight?.addEventListener("mousedown", onMouseDownRightResize);

    // clean up function for when components unmounts!
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