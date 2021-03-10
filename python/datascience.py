# Progress Bar
from tqdm import tqqdm

#
import pandas as pd
import seaborn as sns
import numpy as np

# Opening Data
data = pd.read_csv('target.csv')

#Showing top 5 and 5 bottom
data.head()
data.tail()

# Showing Columns Title
data.columns

#Showing n x m 
data.shape

#Showing mean max min
data.describe()

#Showing Null Data
data.isnull().sum()

#Showing Unique Total
data.kolom.nunique()

#Data Visualization
sns.relplot(x='kolom', y='kolom, data=data)
