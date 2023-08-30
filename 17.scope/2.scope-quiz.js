{
    const x =1;
    {
        const y = 2;
        console.log(x); // 1
    }
    console.log(x); // 1
    // console.log(y); // X
}

const text= 'global';
{
    const text = 'inside block1';
    {
        console.log(text);
    }
}