export default function formatDate(theDate) {
    const date = new Date(theDate)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
    return `${month} ${day} ${year}`
}