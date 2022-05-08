export const formatPrice = (price) => {
    const newNumber = new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
    }).format((price));
    return newNumber;
}