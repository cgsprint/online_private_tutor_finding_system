import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function ParentHome() {

  const parentObject = localStorage.getItem("parentObj");

  // console.log("tutorbject ", JSON.parse(tutorObject).tutorName);

  const parentName =
    JSON.parse(parentObject).parentFirstName +
    " " +
    JSON.parse(parentObject).parentLastName;
  return (
    <div style={{backgroundColor:"LightGreen"}}>
                <Jumbotron style={{backgroundImage:'url(https://png.pngtree.com/thumb_back/fh260/back_pic/03/99/64/8557fa0d3d5c357.jpg)',   fontFamily: "Arial" }}>
      <h1 style={{color:"black"}}><u><b>Welcome {parentName} to education's world!!</b></u></h1>
      <p style={{color:"orange"}}><b> 
      Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.
      <p style={{color:"white"}}>So, let's start our future from here. By following the small steps you can rich to the  the toppest tutors all over the India......</p>
       </b> 
      </p>
      
    </Jumbotron>
     
    <div className="container" style={{backgroundColor:"orange"}}>
      <div className="row">
        <div className="col-sm">
         <div class="card" >
      <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-78471,resizemode-1,msid-49831206/industry/services/education/da-vinci-learning-launches-hd-educational-channel-in-india.jpg" class="card-img-top" alt="..." width="100px" />
      <div class="card-body">
        <h5 class="card-title"  style={{color:"Red"}}><b>We Build Students.</b></h5>
        <p class="card-text">Where there is a will, there is a way. If there is a chance in a million that you can do something, anything, to keep what you want from ending, do it. Pry the door open or, if need be, wedge your foot in that door and keep it open...</p>
        <a href="#" class="btn btn-primary">Go Somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="https://idevelopcourses.com/wp-content/uploads/2016/09/Educational-coaching-1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title" style={{color:"green"}}><b>Success</b></h5>
        <p class="card-text">Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you..</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
        <div className="col-sm">
         <div class="card" >
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEhIVFRAVEA8PFxAVFRUQFRUXFRUWFxUYGBYYHSggGBolGxgXITEhJSkrLi4uGh8zODMtNygtLi0BCgoKDg0OGhAQGi0lHyUrLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tKysvLS0tKy0tLS0tLS0tLS0tLS0tLS0rN//AABEIAK4BIgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD0QAAEDAwIDBgMGBQMEAwAAAAEAAhEDEiEEMUFRYQUTInGBkQYy8EJSobHB0RQjU2LxM3LhFYKi4iRDsv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACwRAAIDAAECAwgCAwEAAAAAAAABAhESAyExQWGBBBMiUaHR4fBxwTKRsfH/2gAMAwEAAhEDEQA/APiJCiO1WAmoSwFcI4VwjQNAQpCZartRyDQqFdqZartRyDQqFdqbapajkGhVqkJtqsNRybQmFIToUhbJtCYUhOtVWo5NoVCkJ1qhatk2hMKQm2qWo5NoXCqE21S1bJtCoUhNtVWrZNoXCkJkKQtkOhUKQm2qrVsmsXCkI4VQhkNgFUjIVEIOIbAVIiFUJaDZSElFCohLQSpUUhRagmiFYCOFYanohYICsBGGqw1NQHIANRBqMNRBqORXIXapam2q7Uci6FWqw1NsV2p1EGhQaoGp1ilqOQaElqlqe4KrUch0KtVWp8Y9VVqOTaFBiq1PcxUWo4NoRYqtTixWW+6GQ6EWqWptqlq2TaEwpanWqrVsh0KhVCdaqtWyaxNqkJtqq1bIbFEIYTi1UWoZGTFEISE61CWpXENiYVEJxagLUriNYohUQmlqEhTaGsXCtFaohQbNcKw1HaiDVRI5XIANRBqMNRBqZIVyADUQYmNYjjkmSEchIajDf8p/d8t+KoMVFAXQoMUtT2Ui4wB6Baf4J0ZaR1IIVYcLn2EfIkc+1SxaqFAl1sEnaAugOzQPncG9B4newVOL2aXIrQsuZR7nNbR+UBt9R0QyCYk4wMkngP3W7W9i6qgzvK1Ad3IBIDRBOwJp5Ydvm57Lodg209WHOIbNItZUOzXOp2tM8IMieC9frA2hRquqNDaZp16dpDGmpfSa1jGwJdm3IwLN8BXfs6jSEfPUkkfL6tEYIy0gkH1gg9RCIaf8pW/SaZpYLnWgve4GJx4R+YPstFTSky5sObzb4vccFSHsit2aXOk6OG5qq1dI6a7YZ5DKU/RuEkgwN4z7xsocns8osquRMxhkZ4oSxabZ3VCn7qeLH0ZbVLVpcyMj/B6IbJSOFMZSM9qq1PtVWrZDYktVWp5aqtWyNYgtVWp5ahLVshsTahLU+1UWpXENiC1UQnFqEtSuIyYkhCQnFqEtSOIbEEISE8tQFqk0NYqFEy1RJQbNtqINTA1EGqqRxOQAaiDUwNRBqZIRyBDceaZTZx9Amilccb4EbJ7qUGOA8PLz6b81WMSbmZmsV23fWE97IEfX/H+Uyhp5VYcenSElyUM0HZ7q1UadjmsJGS4ltxi4tkA4A4bYPRdrVfB1XT0jqO9pBrafeS1zpMmAGw3xTLRwGeWVz6Op/hqwr2hw4B0xNtpBj1Pqun2p8Wh2m/hmMpWPphrg0VQ5huDgAXHImOeQeET6Dfu0lH1JOXJJrPY4HfucwEeEGQ4NxLhvnlBB9VDUIHLqm0qJDQ3jLnuJ4EwI84A8pXQ0fY73t7zwsp/1qhtHpxd6Kbm76Cck4Q6vojkHxCHBxA2IwR5E8OiSdGBmHnpho9YJP5Lu1H6Knh1WrVI/ptFNv6lANdoTju9QOoeHfgWoVOQY88l/jCVfx96ZxHufxkYiNgByHRDScWmWkg8xhejpaKhWxQ1ALv6VYd2fRwxPmsGs7Mcx1rmlj/unY9Rz9FNwl8xoe0Qk8vv8n0+jFaf+fXbRe60Oi94G/huMgbwOHOV2NZ8N6cUXVKVZ3eU6ZfFpFxBEwYFmD12XH0Z7vUNquwz5XGJtNhbmOe/vyXfqdrUBRewVS5zmOY1v8wyXERhwAHnv7rqjKTS7jStNZ7HljSuaHcZLXcBIjOOYIxzlARw+j9cl0e6sYGu+aXOjqYFvsB6rG7J2Q5YQTtFITsQG+2xQOpwVsLOP19eSjqBImNsE7YO2/r+Ci4WUUjE5iGxayzEdUFiXBRMzWKixarFRYhgNmUtVFi1WISxbAbMtqqxaixCWJXANmUsQlq1FiEsSOAdGUtQlq1GmhLFNwDoyFiEtWosQlilKIdGW1WtFiinkOjUGow1EAjaEyRxOQAajDUYamtp4mY906RNyJpm5J+6CfXYfiQtNFvDfpg/l+oRaej4cQZe0egBJ68QtHdEAkg7dT1HzDpzKouiJSmZgwOPL8QtdKjAgZn6H10WOk4grs6B+QXMxl0idxsu3garoc3NJpdDB2i+0imIho8WAZcd5B3AWbTU5dgNbzcGtafcDCdq6cO3kmXHzJXQ7H0PeOYza83OPJgy78PzU5XKbsb3i4+O7GUKFOjS/iawlm1Kj/UI4n+2fdcDtXtWrqHS8yNhTGGtHKAtXxL2h39Yxim3+XTaNg1uPr1XPo0l0QjX8jcHHS97yf5P6L5fczikT9Qr7hdFtFOfonNaHFjg13yuLSGu8icFU938y/vjjkEfvxHqvQdj9tB7Rp9VLqUw1/wBumeBBXOqUVleyP1CbNv4gTjHmjT9H4r+D0PaGhdRfbIJi5rx8tRh2PksQHEACeIa1p9wJXW7IrHUaV1M5q0B3rDuSw/MPb8lhcyD0IuCVJxdHPxzfWMu6+vn6i9Tpy4B+x+R3mNj7LNVojef3niu2Bc08iyeeRsubqKZG4/RO4Jpsrwzb6GenEQBnmfrz91AyTHMFvD0wOsJlEZ+vNG5hHpnjw9gppHQYbFVi11qcOPKTHlwS7VsFU7M9iqxaLVVq2BrM9iosWi1UWrYNZnLEJYtNqEtSOJrMxYhLFpLVRakcQ2ZSxCWLSWoS1SlEGjKWISxai1AWqEom0ZrFafaop5BsIBGAlgpjSkRFhtCbGB5n9EppTpwPM/omRNmmkPA3/dUObeTB9rCc+AwxGeUDYt5O6/8AHFLonwt3+aoMSPuHgCm1ZsO/rPNvOOXJUIOxDapaAZklwYJyOpg7x+oXepfBdd0EupkuElxcTGJzIk+krz4bMRu190cx9r8gfdeu0/xkOFMQIGXEE+fJdfDvPwC8jkksnnO0NM+jXfp6hBewCHAk/ZDok5IgznaIXa7P/l09RU4s09o6XGPyC53auoGo1NTUhsAtAH+7uw0gc4E/gt+mINHUs4uoscPQn91mql1Ie0u4L0v/AGjx7QSQOOB6lep7G+E69aC4d0z7zxDvRm/vC8vQeWuDgSDhwcMEeR4L2/Z3xHXp6dlSp/Ma6pUZc6QYAbaA4cZvyZ2VpuVvJ187lXwnp+yfhrTUINveP3vfDh6N2H5rs1XsqNLHBr2kQWGHD1C8xodO7VMbUrPcWuEiiwljAOsZcfVdBvw3pSP9O08HNe8Edd1yTSu5t3++ZxW3KrOV2x8GU3y6g7u3f03S5h8ju38V4XtfsurpzbVYW8nbtPk4YK95272hV0BFMOFUPE0y+b2wYIcR82YzheO7Y7Yq1/DUeS3eweEYzsDE4kSD5rq4ZTq27R1cC5L69gfgutbq2N4OD6Z6g/5TqrQ0wThrqjSeQbM/kk/B2n/+Yw8nOPo2JKdqi1znTs51XmTDgSSPR2yryS+L0QZQvndfJf8AWH2d2TW1jC5oBY1xFpcGtbx4nJzug7W7C1GiaKlRkUnOtgOa4EwTsDgwDnonfD/bLdNTq6arSLg5xmHWSCA3GNjgz1Wrtz4lbq6LNLRpWBrmukuuEAFu28Q6Zngi+SadJLP75jwjNT8jl6SmLjxgtgxOCRLgIPDpxTdXBbJifNpOepyR+xhIYRc2JAuY0HIwMcScx+qY/JJM7N4u+7J4dDxU/GzpMtff/tZ/+QlrVWaJGBltON/uDrj8UptPJ47R6ifyVNIaK6I6PZvZDKtF1epWNNraoow2i6uSS26fC4RxR0uxqBpGs/VWU+/dp2uNB7i4hjXSQHS35jg8k7srtplCg6iTXaXVhVD9O9tN0BtsG6cfsEA7U0rqTqNRmocz+JfqWm+mHkupta4PdGZIccAbhQ1O33r0Ee7f4Edo9gOoU6j3PBsrUqQDRIeKjC9rw6do4QmN+HftvrBlEaXT6p9UsJt74uDGBoMudIPJNq/ENOv3rK9N4o1HUnMFJzQ6n3bbGgFwhwt59fSqvxDSe59N9J38K+hp9OGBw71ooEmm4OIgulxkbZ6Z18tf+eX5BfIc+p2W11alS09YVu9IANjqZaZjxNO3E77CVpo/D7DqTpn6gNcTT7p4pmo2s14lrgQ4BoiOJ3PJFpu19Np3F9Ci8vFI02urODwS4+Jzw2I8MtFp4lWPiFhqaaq6iGv074ilhjqQy1oDiSCDPGMoSc/D+jN8nh/X75Gap2I1zarqNbvO6NBsd0aZc+rUNO0S7hAM8ZTT8OMLzp2apjtW0O/kd24NLmiXMbVJguEHhwKy6TtfumVwAb6tTT1GOxDTSqmpkceC2/8AXtO2qdWyhUGqNzrS9pote8EOeBFx3Jg80snP9oSXvV29O3yXfy7mOp8PVA3T1JmlqO5F4H+m6oQAHCeuDx6Ll63T93VfTmbKlSndETa4tmOGy7VD4mdSfQcxpLaenpaepTdBbUscXT0ImQdwVxdfqBUq1KgEB9WpUAO4DnF0H3SdfEaHvL+Lt+TMQhIREoCVORRlKKSopGNn/STOKlPeMl7c/dy3B2wVB2VV3DQcxh7JB5ETMpVOvwlpMEYutDRM5gQwR8rfmO5K00q5BHzTDRmCc/K0MaBk5IYDaOMqPQVqSM9bS1KeX03tHNzS0e5VNeI34+a6um1xbs4jE4i0BuCb5GJxIaGzIActZ1Id87GPORLmNu5mSRIcBnp9oMRRGTkvA5NGo22MmH+XzD/1TRWFpAAz+k8usLpfw2mdP8st6tc5vWYdIGPYGdsptHsOk8w11UdPC78IHH8lRMjLkiurTOGysQcQPID812tH2WXNFR4Y1rtnObl3W0DPmd+q6Oi+F6VKoHVat7WNNR1IsDds+Ihxx04pLtSXvc925l4ZJkA8BJmBtgN9Vfjk4nM+dcnTi9X9hPaXZ7g29sOY1sG3Fo/28vJYNNqrYPCCw+R+gvQaXXOBmY/UHz5/XNYq4oOd4qLWzwDnNJ8mNOPZZzsWOknGSv8AfQ8lrGWOI6kjyP7Fb6XaYNBlEt+V7n3TcDdwtO3nPPmutV7IpVSGgPacGZB36OE9M/juufrfh57AXUze0ZIAtcOtvEeRKquZOrO5c0JJKXc6uj7bDqbKffvo2C0w24OyTNzfED0iE2lrrDJ7Sd5NbXcfYgD3XixWhF36r8P7QfcdT0nxJ26NT3Y8bjTYWd68NY55JBm1phu0RlcGpqATtk44Ynf/AAspqE7Lp9idjO1Bud4aLfE+scADkE8YxUfIq3HijqTOx8P/AMmhW1RxdNGl1Ltz+Z9VhDgY32IJ822/otPaOrFZwZTEUKQtYOfU9T+ix/L64UZz07Obicm3OXd+HyXgvuEKl32ZyTkA8ZwdxmNuSUypbgAAYkAAdR5+q2aTTlwn6gLBWeHOJ2z9eqaPUvHkt0MZW8QjgQeW0x5bn3RPrgyQNxjb7pbmD1WcSJPDaeH1shD854eL2zxym6LoVuzRWri7ydHtgfgl9/npj8BH746rIXqr0NIquxva9rjJPHM8eXE/UIHWzvjGZB4icdM+ywl6q9bQaNxDYHizIBG8DiZGCgDR94b8x0/SfZY71Rehs1G028+AO/Q7wDGw91Tms+/P6fviPxWG9VelczZNtQNj5s5xv5ZHus5ekF6ovU3MORxehL0kvQl6m5myOL0BelF6EvUZTNkdeokXqKejZNDaoi6MBo8JeIIaY2t2u4Tkp7H5gnMlpdxki6s7zA8PkuXd4SOVIDBB/wDtB4LUXZcBuX6gEwCcNkCYkTkY5pUNKB0aVUm0tIBLmiM+AmRTwRlrWAkZ3MrTQqjHAeDBnAJLmB0bgNa6oc5cRK51F+R50M9HUi2fIFNpPxJw3+U0k4iKbqTt9yJBhEhKB19LVmDtgO44+V3Ocd407yTed7SO8ztDuWWsHjcNxuAMYAEx1AxheW09Q4keIQ0gED7rXzcHAm9jWxgeIc10asOYJiPCIw1uJIgOBbxwMHqmTo4+bhU+kuxu7O1pNUwZDm1GSSDwmJGC7A8IJxJxAakUT3Ti0nF1uGttcYxgNBJyDaC481iBLXB/EEQXWOOP7nPcQN/lA9FurUC8943LXgku3gTBHhOWg4i4DH2jKdMRwSf8/wBHYoaenVb4XtyPlJAJjl5wc+fJcyvpnUpBENgknFNuMyLRJ25ysptb4thDnxmA1rWhk8vlB4Z2zCaNe5k2G0A3WwbeQJac2mAMiThrZwWmya45p9Ha8/v+A2AgbHJzjugeRMku9Vt0dRwBjaN2gw3kB+AWKn2gYtNNhyZ8MOcZAzbi7OYHzODRsStjNYfsMAbEzuZg7HbbbGemCdYJxk1TRx+1fh0uqlzHAFzi6wi0Cc4nhlZKHw5M3aig3nLsj0yvUOqubBa4VGmb6TiXWmZJzkYP2eW2ZQa7TUK2L2tcG4LgQQSCYMAA7EztAOBBKtDlaAvaOVKr6fOrOLS0Gjo5c92ocPstFjJ6uP7INf2jUrkUwA1g+WizDR1PM9Stx+Hak/6l7eApjqPmPDjsStempUqAItbc6GgjLhcCT4jxj8k7m33NqF6tzl4eXp0r/RztHoCY+6Mnr5Dcz+vDivuQXSc5ztbjJE8RA8tzwMd6k4AHABiC9xydwQMeHjOBiFndoHOEstIABgS0+g54BxtIjI8Wik3ZlzO3oTSpl3v5f48v2gYvieiGMY4kd4TAHEsjc+RxPU8lVbt7+HaWUw1z9rsFreeBhx6bD/xHnq2oc9xqPcXPcZk5J+uSaXJbpF+LhnvT6JfUZ3kfvt9f8oXVvDtvjlgb423j2SLp/f8AP6KVUqSemw8kjnSO9RHOdxlCXpTn8EsvSbKJD+8VGokXqr0PeDUPL0JqJBeqL0r5A0PNRCaiTehvSvkDQ8vQl6SXoS9I5jZH3oS9JvVXKbmHI4vQl6SXKrlNyNkderWe5RLoODQzyxLhHQ/Mz/cNwtNI4HE3NIcMTaIBzOebYlZBqaY4F3oGA+fP1CP/AKkfstaOEkXH3P7K/wAC7v8A11/AZJ+COjRoE4AkQRG+DktJA2nIjIO4W0aVwy6G5Jl0NyRBJnEkYIyHdCuAddUO73RyBtHsMIWuQ95HwRF8cj0zKtJm72GIxJeDiN2gzjHlgk8NDO2KDMTUeN5taOMx4j556ncmV5RrkYct7zyIy4E+7PUN7dojag4+b2tj/wACt/ZvxDRBtd3jGEgkECq0cMEQR7cAvFtenNdy/wAJlMjP2WDVdT6C/S06wc6jVDxgktJuEYEtOWgR+cZyuXqNG4CGQIc43faB2kGYv+zccjeRJI8vT1BaQWktI2c0lpHUEey6+m+Jqrf9RrareMi15/7m8fMFPaILg5Ydnf0f2/4arS0mW4F0N4QDAaJz8hA86ruK2ViWjEnLgMWyQCRnedxcI+aRmVNL2zpKu7nUnYw8S3pDm/mYW6tTouZ4Xz4XeKlbV38jI4pkr7EZctOpRa9DBp62dxxhx8O0EdAYLTH9xAwIO9+spuAljS6bbnYw4+xPHPVYW6cgyJi4u2LTsGgZ4Q0JTnv/ALuBkic8DyxwHE8gnjJLwGlxxmdKh2k4YAaJD/CA0ZaYPoef5otXrLmkNAaXCZaIcRicyIMDOy4R1bG71GjAEXgmAdsZ3knn5ZQHtOk2f5gPQB2fIRHTfbjwRfKmZeyK7SN1Cqbo5kHnmIb6R7nOAJXVpMLPE8hjQAS9+BxiSfyXjK3brgf5QA/ucA49cbfmsGq1lSqbqj3PP9xLvadkq5UlRafsspv5L6mrtWqx1eo6n/pl7i3hM745TMeiyGr7ckkvlCXx5/X4pN0dsYUkh1R0cd9/2Sg7ilXqnPSOdjqIZcqLksuQlyGh8jLkNyC5Dcl0MojC5Vcllyq5ByDkZchuQSqlLoOQ7lRcguVXJXIagy5DchlVKRyDQRcqLkEqpSNjJByoglRCzUCCja5JBRArWO0aA5Ma5Zg5GHJkybiaQ5GHLMHIg9OpE3E0hyaKkfr+yyByIPTKQriag/8AwrD1luRCom0Lg1F+PxQuMpBqKr1tAyaCeCokrOXqXraDkeSquSL1V62jZNDnoS5JvQ3raDgf3nL3QOdxSi5UXoaGURhcqLkq5UXIaDkYXKrku5VchobIwuVSl3KiUNByMlUXJcqShoNB3KpQSqlDQaDJVXICVUpWxqDlVKC5VKFhoOVUoJVSlsNByoglRCw0SVYKBQFGwtDQUQclAq5RsWhwciDkiVYcjYriaA9Xes9yu5GwZNF6vvFmuUvR0DBovUvWe5S5bRsGi9S9Z7lLltGwPvVXpNyly2jZHB6l6TcquQ0HI65VelXKSto2Rtyq5KuUlDQcjLlVyCVUraDkZcqlBKqVrNkZcqlBKlyFhoKVJQSpK1hoKVRKGVCUGzUXKkoZVIDUFKolUogYuVEKiwT/2Q==" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{color:"red"}}><b>Beauty of Education</b></h5>
        <p class="card-text">The future belongs to those who believe in the beauty of their dreams.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        </div>
      </div>
    </div>
    
    <hr></hr>
    <footer class="text-muted">
      <div class="container">
            <small class="d-block mb-3 text-muted">&copy; 2021 Online Private Tutor Finder System</small>
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
      </div>
      </footer><hr></hr>
    

        </div>
    )
}


export default ParentHome