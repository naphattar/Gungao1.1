import CSS from 'csstype';

export const topicpagebodyLarge : CSS.Properties = {
    height : "auto",
    display : "flex",
    alignItems : "center",
    flexDirection : "column",
    justifyContent : "center",
    alignContent : "center",
};

export const topicpagebodySmall : CSS.Properties = {
    height : "auto",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    border : "solid red 1px",
    flexDirection : "column",
};


export const textcontainer : CSS.Properties = {
    width : "80%",
    height : "10%",
    marginTop : "1rem",
    alignItems : "center",
    marginLeft : "12%",
    marginBottom : "1rem",
}

export const topicscontainerLarge : CSS.Properties = {
    width : "90%",
    height : "80%",
    marginBottom : "1rem",
    display : "grid",
    alignItems : "center",
    gridTemplateColumns : "1fr 1fr 1fr",
    columnGap : "1rem",
}

export const topicscontainerSmall: CSS.Properties = {
    width : "90%",
    height : "80%",
    marginBottom : "1rem",
    display : "grid",
    alignItems : "center",
    gridTemplateColumns : "1fr 1fr",
    columnGap : "1rem",
}

export const textstyleLarge : CSS.Properties = {
    color : "whitesmoke",
    padding : "0rem" , 
    margin : "0.6rem",
    fontWeight : "bold" , 
    textShadow : "1px 0 3px #66FCF1",
};

export const textstyleSmall : CSS.Properties = {
    color : "whitesmoke",
    padding : "0rem" , 
    margin : "0.6rem",
    fontWeight : "bold" , 
    textShadow : "1px 0 3px #66FCF1",
    fontSize : "1rem",
}



