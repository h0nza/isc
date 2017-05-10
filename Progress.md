# SmartClientTypeScriptDefinitionGenerator 

By Kyle White ( <a href="http://kmwTech.com/" target="_blank">KMW Tech Solutions, Inc.</a> )

## Progress Report
 
Generated from SmartClient SNAPSHOT_v11.1d_2017-05-09 at 5/10/2017 1:29:14 PM by kwhite

### Progress

|   |Item|Value|Description|
|---|--- |---  |---        |
||**Information**||**Informational only, not a problem**|
|1|Types|229||
|2|Classes|309||
|3|Objects|67||
|4|Methods|3,555||
|5|String values where reference is found|0|Possible string values that refer to a constant that was found.|
|6|string values with quotes|216|String values surrounded by quotes. This indicates a literal string and is easy to generate.|
|7|string values without quotes|657|String values NOT surrounded by quotes. This usually indicates a reference to a constant somewhere.|
|8|string values with period|130|These usually are really references to a constant.|
|9|Arrays defined as 'Array of'|225|Since most arrays are described this way, this is assumed to be the 'correct' way.|
|10|Types Generated|229||
|11|Interfaces Generated|3||
|12|Objects Generated|25||
|13|Classes Generated|77||
|14|Methods Generated|353||
|15|Percentage of Types generated|100%||
|16|Percentage of Interfaces generated|60%||
|17|Percentage of Objects generated|37%||
|18|Percentage of Classes generated|25%||
|19|Percentage of Methods generated|10%||


### Issues with referenceDocs.xml file


|   |Item|Value|Description|
|---|--- |---  |---        |
||**Warnings**||**Does not prevent item from being generated but might indicate a problem or inconsistency in the docs**|
|1|Non-optional params with the word 'Optional' in the description|19|Probably, although not necessarily, a mistake.|
|2|Methods with bad flags|3|Method flags should only contain A|
||**Errors**||**May or may not be an error in the isc system but prevents proper code generation unless special handling is implemented**|
|1|Classes without inheritsFrom attribute|202|Although not an error in the isc system, this prevents automated code-generation from working because there's no way to tell if a class inherits from Class or if it is just missing the attribute|
|2|String values without reference|130|Possible string values that refer to a constant but the constant cannot be found. For example DateItem.DAY_MONTH|
|3|Setter Methods with paramter type that does not match the attribute type|88|If a property has a setter, it should take the same type as the property. NOTE: Sometimes they are equivalent (i.e. string vs. URL) but still listed here in hopes of making the docs consistent.|
|4|String types without baseType|83|Types that are really just strings should have their own type or have the baseType='string'.|
|5|Getter Methods with return type that does not match the attribute type|42|If a property has a getter, it should return the same type as the property. NOTE: Sometimes they are equivalent(i.e. string vs.URL) but still listed here hopes of making the docs consistent.|
|6|Method params with missing name|15|All paramters should have a name.|
|7|Arrays defined as 'Array[] of'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|8|Arrays defined as 'array' or 'Array'|10|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|9|Method params missing type|7|All parameters should have a type.|
|10|Methods with required parameters after optional parameters|7|Required parameters should always be at the end of the parameter list.|
|11|Arrays defined as 'array of'|1|Since most arrays are NOT described this way, this is assumed to be incorrect.|
|12|Method params with bad name|1|All paramters should have a name without special characters.|
|13|Arrays defined as 'array[] of'|0|Since most arrays are NOT described this way, this is assumed to be incorrect.|