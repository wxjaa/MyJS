var str = 'abcdefgldkajlfj;dklajfkljaskljfeuiueijnmn';
console.log(str.replace(/(.{1})/,'$1这是插入的字符'));//a这是插入的字符bcdefgldkajlfj;dklajfkljaskljfeuiueijnmn
                                                    //如果要重复插入，全局匹配即可