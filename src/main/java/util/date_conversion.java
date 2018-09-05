package util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class date_conversion {



	public static String date_conversionn(String inputPattern, String outputPattern, String givenDate) throws ParseException {
		DateFormat inputformat = new SimpleDateFormat(inputPattern);
		DateFormat outputformat = new SimpleDateFormat(outputPattern);
		//Date date = null;
		String requiredDate = null;
		//Date date = new Date();
		System.out.println(inputformat.parse(givenDate));
		Date date = inputformat.parse(givenDate);
		requiredDate = outputformat.format(date);
		return requiredDate;

	}
}