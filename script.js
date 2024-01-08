function calculateDate() {
  const startDateString = document.getElementById('startDate').value;
  const weekNumber = parseInt(document.getElementById('week').value);
  const selectedDay = document.getElementById('day').value;

  if (isNaN(weekNumber) || weekNumber < 1) {
    alert('Please enter a valid week number.');
    return;
  }

  if (!startDateString) {
    alert('Please enter a valid start date.');
    return;
  }

  // Find the Monday of the selected week in UTC
  const startDate = new Date(startDateString);
  const mondayOfSelectedWeek = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() - startDate.getUTCDay() + 1 + (weekNumber - 1) * 7
    )
  );

  // Calculate days to add from Monday to the selected day
  const daysToAdd = getDayIndex(selectedDay);

  // Create the target date by adding days to the Monday of the selected week
  const targetDate = new Date(mondayOfSelectedWeek);
  targetDate.setUTCDate(mondayOfSelectedWeek.getUTCDate() + daysToAdd -1);

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = targetDate.toLocaleDateString(undefined, options);

  document.getElementById('result').innerHTML = `The date is ${formattedDate}.`;
}

function getDayIndex(day) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return daysOfWeek.indexOf(day.toLowerCase());
}
